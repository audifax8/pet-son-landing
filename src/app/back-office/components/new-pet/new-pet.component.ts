import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommandService, FormService } from '../../../shared/services';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.scss']
})
export class NewPetComponent implements OnInit {

  public loginForm: FormGroup;

  public loginConstants = {
    USER_NAME: 'name',
    PASSWORD: 'PASSWORD'
  };

  constructor(
    private commandS: CommandService,
    public formS: FormService,
  ) { }

  ngOnInit(): void {
  }

  private getFormInstance(): FormGroup {
    const loginForm = new FormGroup({});
    const userNameFormControl = new FormControl();
    const passwordFormControl = new FormControl();
    loginForm.addControl(this.loginConstants.USER_NAME, userNameFormControl);
    loginForm.addControl(this.loginConstants.PASSWORD, passwordFormControl);
    return loginForm;
  }

}
