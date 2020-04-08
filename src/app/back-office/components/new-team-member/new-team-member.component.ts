import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommandService, FormService, UserService, ExternalLibsService } from '../../../shared/services';
import { CommandValidationRule } from '../../../util';

@Component({
  selector: 'app-new-team-member',
  templateUrl: './new-team-member.component.html',
  styleUrls: ['./new-team-member.component.scss']
})
export class NewTeamMemberComponent implements OnInit {

  public teamMemberForm: FormGroup;

  public formConstants = {
    ID: 'ID',
    NAME: 'NAME',
    ROLE: 'ROLE',
    DESCRIPTION: 'DESCRIPTION',
    OCCUPATION: 'OCCUPATION',
    AVATAR: 'AVATAR',
    IMAGE: 'IMAGE'
  };

  public isDevMode: boolean;

  public error$: Observable<string>;

  constructor(
    private commandS: CommandService,
    public formS: FormService,
    private userS: UserService,
    private externalLibsS: ExternalLibsService
  ) {
    this.isDevMode = this.externalLibsS.isDevMode;
  }

  ngOnInit(): void {
    this.loadForm();
    this.error$ = this.userS.errorMessage$;
  }

  private loadForm(): void {
    this.teamMemberForm = this.getFormInstance();

    this.commandS.addCommand(new CommandValidationRule(
      this.teamMemberForm,
      this.formConstants.ID,
      [Validators.required]));
    this.commandS.addCommand(new CommandValidationRule(
      this.teamMemberForm,
      this.formConstants.NAME,
      [Validators.required]));
    this.commandS.addCommand(new CommandValidationRule(
      this.teamMemberForm,
      this.formConstants.ROLE,
      [Validators.required]));
    this.commandS.addCommand(new CommandValidationRule(
      this.teamMemberForm,
      this.formConstants.DESCRIPTION,
      [Validators.required]));
    this.commandS.addCommand(new CommandValidationRule(
      this.teamMemberForm,
      this.formConstants.OCCUPATION,
      [Validators.required]));

    this.commandS.executeCommands();
  }

  private getFormInstance(): FormGroup {
    const teamMemberForm = new FormGroup({});
    const nameFormControl = new FormControl();
    const roleFormControl = new FormControl();
    const descriptionormControl = new FormControl();
    const occupationFormControl = new FormControl();
    teamMemberForm.addControl(this.formConstants.NAME, nameFormControl);
    teamMemberForm.addControl(this.formConstants.ROLE, roleFormControl);
    teamMemberForm.addControl(this.formConstants.DESCRIPTION, descriptionormControl);
    teamMemberForm.addControl(this.formConstants.OCCUPATION, occupationFormControl);
    return teamMemberForm;
  }

  public create(): void {
    console.log(this.externalLibsS.generateGuiId());
  }

  public clear(): void {
  }

}
