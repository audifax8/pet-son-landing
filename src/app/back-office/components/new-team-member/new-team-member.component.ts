import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  CommandService,
  FormService,
  ExternalLibsService,
  FileStorageService,
  DataBaseService
} from '../../../shared/services';
import {
  CommandValidationRule,
  CommandInputValue
} from '../../../util';

import {
  TeamMember
} from '../../../shared/models'
import {
  FormState
} from '../../../shared/enums';

@Component({
  selector: 'app-new-team-member',
  templateUrl: './new-team-member.component.html',
  styleUrls: ['./new-team-member.component.scss']
})
export class NewTeamMemberComponent implements OnInit {

  public teamMemberForm: FormGroup;
  public formConstants = TeamMember.formConstants;

  public avatarFullPath: string;

  private avatar: File;
  public isPendingAvatar = false;

  private teamMember: TeamMember;

  public isDevMode: boolean;

  constructor(
    private rote: ActivatedRoute,
    private roter: Router,
    private commandS: CommandService,
    public formS: FormService,
    private externalLibsS: ExternalLibsService,
    private fileStorageS: FileStorageService,
    private dbS: DataBaseService
  ) {
    this.isDevMode = this.externalLibsS.isDevMode;
    this.teamMember = new TeamMember();
  }

  ngOnInit(): void {
    this.teamMemberForm = this.teamMember.getFormInstance();
    const teamMemberId = this.rote.snapshot.paramMap.get('teamMemberId');
    if (teamMemberId) {
      this.dbS.getCollectionById(TeamMember.COLLECTION_PATH, teamMemberId)
        .subscribe(collection => {
          if (!collection.exists) return;
          this.loadFormByState(
            FormState.EDIT,
            this.teamMemberForm,
            teamMemberId,
            collection.data()
          );
        });
    } else {
      this.loadFormByState(
        FormState.DEFAULT,
        this.teamMemberForm,
        this.teamMember.getId()
      );
    }
  }

  private loadFormByState(
      state: FormState,
      form: FormGroup,
      teamMemberId?: string,
      teamMember?: any
  ): void {
    switch(state) {
      case FormState.DEFAULT:
        this.commandS.addCommand(new CommandValidationRule(
          form,
          this.formConstants.ID,
          [Validators.required]));
        this.commandS.addCommand(new CommandValidationRule(
          form,
          this.formConstants.NAME,
          [Validators.required]));
        this.commandS.addCommand(new CommandValidationRule(
          form,
          this.formConstants.ROLE,
          [Validators.required]));
        this.commandS.addCommand(new CommandValidationRule(
          form,
          this.formConstants.DESCRIPTION,
          [Validators.required]));
        this.commandS.addCommand(new CommandValidationRule(
          form,
          this.formConstants.OCCUPATION,
          [Validators.required]));
        this.commandS.addCommand(new CommandInputValue(
          form,
          this.formConstants.ID,
          teamMemberId)
        );
        break;
    case FormState.EDIT:
        this.commandS.addCommand(new CommandInputValue(
          form,
          this.formConstants.ID,
          teamMemberId)
        );
        this.commandS.addCommand(new CommandInputValue(
          form,
          this.formConstants.NAME,
          teamMember.name)
        );
        this.commandS.addCommand(new CommandInputValue(
          form,
          this.formConstants.ROLE,
          teamMember.role)
        );
        this.commandS.addCommand(new CommandInputValue(
          form,
          this.formConstants.DESCRIPTION,
          teamMember.description)
        );
        this.commandS.addCommand(new CommandInputValue(
          form,
          this.formConstants.OCCUPATION,
          teamMember.occupation)
        );
        // this.avatarFullPath = teamMember.avatar;
        this.fileStorageS.getFile(
          TeamMember.FILE_STORE_PATH,
          teamMember.id
        ).then(
          url => {
            this.avatarFullPath = url;
          }
        );
        break;
    case FormState.MARK_AS_DIRTY_AND_TOUCHED:
        this.formS.markAsTouchedAndMarkAsDirty(
          form
        );
        if (!this.avatar) {
          this.isPendingAvatar = true
        }
        break;
    case FormState.RESET:
          this.formS.reset(
            form
          );
        break;
      default:
        break;
    }
    this.commandS.executeCommands();
  }

  public create(): void {
    if (this.teamMemberForm.invalid || !this.avatar) {
      this.loadFormByState(
        FormState.MARK_AS_DIRTY_AND_TOUCHED,
        this.teamMemberForm
      );
      return;
    }
    this.save();

  }

  public clear(): void {
    this.isPendingAvatar = false;
    this.avatar = null;
    this.avatarFullPath = null;
    this.teamMember = new TeamMember();
    this.loadFormByState(
      FormState.RESET,
      this.teamMemberForm
    );
    this.loadFormByState(
      FormState.DEFAULT,
      this.teamMemberForm,
      this.teamMember.getId()
    );
  }

  public loadAvatar(event: any) {
    this.avatar = event.target.files[0];
    this.isPendingAvatar = false;
  }

  private save() {
    this.fileStorageS.saveFile(
      TeamMember.FILE_STORE_PATH,
      this.teamMember.getId(),
      this.avatar
    ).then(
      data => {
        this.avatarFullPath = data.metadata.fullPath;
        this.dbS.saveCollection(
          TeamMember.COLLECTION_PATH,
          this.teamMember.mapFormToTeamMember(
            this.teamMemberForm,
            this.avatarFullPath
          )
        ).then(
          data => {
            this.roter.navigate([`back-office/new-team-member/${data.id}`]);
          },
          err => console.log(err)
        );
      }
    );
  }

  /*private delte() {
    if (!this.test) return;
    this.fileStorageS.deleteFile(
      TeamMember.FILE_STORE_PATH,
      this.test
    ).subscribe(
      (succes) => console.log(succes),
      (err) => console.log(err)
    );
  }

  public test1() {
    this.dbS.saveCollection(
      TeamMember.COLLECTION_PATH,
      this.teamMember.mapFormToTeamMember(
        this.teamMemberForm,
        this.avatarFullPath
      )
    ).then(
      data => console.log(data),
      err => console.log(err)
    );
  }*/
}
