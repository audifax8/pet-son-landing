import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

@Injectable()
export class UserService {

  private userSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public user$ = this.userSubject.asObservable();

  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  constructor(
    private afAuthService: AngularFireAuth,
    private router: Router
  ) {
    this.afAuthService.user
      .pipe(
        map((user) => this.userSubject.next(user))
      );
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuthService.auth.signInWithPopup(provider)
    .then((result) => {
      this.errorMessageSubject.next(null);
      this.userSubject.next(result.additionalUserInfo.profile);
    }).catch((error) => {
      this.userSubject.next(null);
      this.errorMessageSubject.next(error);
    })
  }

  public login(
    email: string,
    password: string
  ) {
    this.afAuthService.auth.signInWithEmailAndPassword(
      email,
      password
    ).then(
      data => {
        this.errorMessageSubject.next(null);
        this.userSubject.next(data.user);
        this.router.navigate(['back-office']);
      }
    ).catch(
      error => {
        this.userSubject.next(null);
        this.errorMessageSubject.next(error);
      }
    );
  }

  public logout() {
    this.afAuthService.auth.signOut()
      .then(
        () => {
          this.userSubject.next(null);
          this.errorMessageSubject.next(null);
          this.router.navigate(['back-office/login']);
        }
      ).catch(
        (error) => this.errorMessageSubject.next(error)
      );
  }

}
