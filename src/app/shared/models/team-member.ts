import { FormGroup, FormControl } from '@angular/forms';
import { BaseModel } from './base-model';

export class TeamMember extends BaseModel {

  static FILE_STORE_PATH = 'pet-son/team-members/';
  static COLLECTION_PATH = 'team-member/';

  static formConstants = {
    ID: 'id',
    NAME: 'name',
    ROLE: 'role',
    DESCRIPTION: 'description',
    OCCUPATION: 'occupation'
  };

  constructor() {
    super();
  }

  public getId(): string {
    return this.id;
  }

  public getFormInstance(): FormGroup {
    const teamMemberForm = new FormGroup({});
    const idFormControl = new FormControl();
    const nameFormControl = new FormControl();
    const roleFormControl = new FormControl();
    const descriptionormControl = new FormControl();
    const occupationFormControl = new FormControl();
    teamMemberForm.addControl(TeamMember.formConstants.ID, idFormControl);
    teamMemberForm.addControl(TeamMember.formConstants.NAME, nameFormControl);
    teamMemberForm.addControl(TeamMember.formConstants.ROLE, roleFormControl);
    teamMemberForm.addControl(TeamMember.formConstants.DESCRIPTION, descriptionormControl);
    teamMemberForm.addControl(TeamMember.formConstants.OCCUPATION, occupationFormControl);
    return teamMemberForm;
  }

  public mapFormToTeamMember(
    form: FormGroup,
    avatar: string
  ) {
    return {
      creationDate: this.creationDate,
      ...form.value,
      avatar
    };
  }

}
