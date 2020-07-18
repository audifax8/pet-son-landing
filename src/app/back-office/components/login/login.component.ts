import { Component, OnInit, OnDestroy  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Observable, Subscription } from 'rxjs';
import {
  CommandService,
  FormService,
  UserService
} from '../../../shared/services';
import {
  CommandValidationRule,
  CommandInputValue
} from '../../../util';
import { LoginType } from '../../../shared/enums';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public user$: Observable<any>;
  private subscription: Subscription;

  public error$: Observable<string>;

  public loginForm: FormGroup;

  public loginConstants = {
    USER_NAME: 'USER_NAME',
    PASSWORD: 'PASSWORD'
  };

  regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

  public isDevMode: boolean;

  constructor(
    private commandS: CommandService,
    public formS: FormService,
    private router: Router,
    public userS: UserService
  ) {
    this.isDevMode = environment.isDevMode;
  }

  ngOnInit(): void {
    this.loadForm();
    this.user$ = this.userS.user$;
    this.subscription = this.user$.subscribe(
      () => this.router.navigate(['back-office'])
    );
    this.error$ = this.userS.errorMessage$;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadForm(): void {
    this.loginForm = this.getFormInstance();

    this.commandS.addCommand(new CommandValidationRule(
      this.loginForm,
      this.loginConstants.USER_NAME,
      [Validators.required])
    );
    this.commandS.addCommand(new CommandValidationRule(
      this.loginForm,
      this.loginConstants.PASSWORD,
      [Validators.required, Validators.pattern(this.regexPassword)])
    );

    if(this.isDevMode) {
      this.commandS.addCommand(new CommandInputValue(
        this.loginForm,
        this.loginConstants.USER_NAME,
        'amarele91@hotmail.com')
      );
      this.commandS.addCommand(new CommandInputValue(
        this.loginForm,
        this.loginConstants.PASSWORD,
        'Grymmjow8@')
      );
    }
    this.commandS.executeCommands();

  }

  private getFormInstance(): FormGroup {
    const loginForm = new FormGroup({});
    const userNameFormControl = new FormControl();
    const passwordFormControl = new FormControl();
    loginForm.addControl(this.loginConstants.USER_NAME, userNameFormControl);
    loginForm.addControl(this.loginConstants.PASSWORD, passwordFormControl);
    return loginForm;
  }

  public login(): void {
    const email = this.formS.getInputValue(
      this.loginConstants.USER_NAME,
      this.loginForm
    );
    const pass = this.formS.getInputValue(
      this.loginConstants.PASSWORD,
      this.loginForm
    );

    if (!email || !pass) {
      this.formS.markAsTouchedAndMarkAsDirty(this.loginForm);
      return;
    }

    this.userS.login(
      email,
      pass
    );

  }

  public async socialLogin(type: string) {
    switch(type) {
      case LoginType.GOOGLE:
        await this.userS.GoogleAuth();
        this.router.navigate(['back-office']);
      default:
        break;
    }
  }

  public clearForm() {
    this.formS.reset(this.loginForm);
  }

  public logout() {
    this.userS.logout();
  }

}
