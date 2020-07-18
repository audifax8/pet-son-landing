import { FormGroup, FormControl } from '@angular/forms';
import { BaseModel } from './base-model';

export class TeamMember extends BaseModel {

  static FILE_STORE_PATH = 'pet-son/team-members/';
  static COLLECTION_PATH = 'team-member/';

  static formConstants = {
    NAME: 'name',
    ROLE: 'role',
    DESCRIPTION: 'description',
    OCCUPATION: 'occupation',
    GENDER: 'gender'
  };

  constructor() {
    super();
  }

  public getId(): string {
    return this.id;
  }

  public getFormInstance(): FormGroup {
    const teamMemberForm = new FormGroup({});
    const nameFormControl = new FormControl();
    const roleFormControl = new FormControl();
    const descriptionormControl = new FormControl();
    const occupationFormControl = new FormControl();
    const genderFormControl = new FormControl();
    teamMemberForm.addControl(TeamMember.formConstants.NAME, nameFormControl);
    teamMemberForm.addControl(TeamMember.formConstants.ROLE, roleFormControl);
    teamMemberForm.addControl(TeamMember.formConstants.DESCRIPTION, descriptionormControl);
    teamMemberForm.addControl(TeamMember.formConstants.OCCUPATION, occupationFormControl);
    teamMemberForm.addControl(TeamMember.formConstants.GENDER, genderFormControl);
    return teamMemberForm;
  }

  public mapFormToTeamMember(
    form: FormGroup,
    avatar: string
  ) {
    return {
      ...form.value,
      avatar
    };
  }

}
