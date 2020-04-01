import { Component, OnInit, isDevMode } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { CommandService, FormService } from '../../../shared/services';
import { CommandValidationRule } from '../../../util';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  public loginForm: FormGroup;

  public loginConstants = {
    USER_NAME: 'USER_NAME',
    PASSWORD: 'PASSWORD'
  };

  regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

  public isDevMode = isDevMode;

  constructor(
    private commandS: CommandService,
    public formS: FormService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private userS: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.afAuth.authState;
    this.loginForm = this.getFormInstance();

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
          this.userS.setUserLogged(true);
          this.userS.setUser(this.user);
          // this.router.navigate(['back-office']);
        }
        else {
          console.log('error');
          this.userDetails = null;
        }
      }
    );

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
    console.log({ type: 'click'});
    const email = this.formS.getInputValue(
      this.loginConstants.USER_NAME,
      this.loginForm
    );
    const pass = this.formS.getInputValue(
      this.loginConstants.PASSWORD,
      this.loginForm
    );
    this.afAuth.auth.signInWithEmailAndPassword(
      email,
      pass
    ).then(
      (user) => {
        console.log({user, type: 'user'});
        this.userS.setUserLogged(true);
        this.userS.setUser(this.user);
        this.router.navigate(['back-office']);
      }
    ).catch(
      (error) => {
        console.log({error, type: 'error'});
      }
    );
  }

  public isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
    } else {
        return true;
    }
  }

  public logout() {
    this.afAuth.auth.signOut().then((res) => {
      this.router.navigate(['/']);
      this.userS.setUser(null);
      this.userS.setUserLogged(false);
    });
  }

}
