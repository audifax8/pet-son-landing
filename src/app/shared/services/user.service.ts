import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase/app';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  private userSubject: BehaviorSubject<User> = new BehaviorSubject(null);
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
