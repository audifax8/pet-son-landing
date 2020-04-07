import { Component, OnInit, OnDestroy ,isDevMode } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { CommandService, FormService, UserService } from '../../../shared/services';
import { CommandValidationRule } from '../../../util';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public user$: Observable<any>;
  private subscription: Subscription;

  public error$: Observable<any>;

  public loginForm: FormGroup;

  public loginConstants = {
    USER_NAME: 'USER_NAME',
    PASSWORD: 'PASSWORD'
  };

  regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

  public isDevMode = isDevMode();

  constructor(
    private commandS: CommandService,
    public formS: FormService,
    private router: Router,
    private userS: UserService
  ) { }

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
      [Validators.required]));
    this.commandS.addCommand(new CommandValidationRule(
      this.loginForm,
      this.loginConstants.PASSWORD,
      [Validators.required, Validators.pattern(this.regexPassword)]));
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

    this.userS.login(
      email,
      pass
    );

  }

  public logout() {
    this.userS.logout();
  }

}
