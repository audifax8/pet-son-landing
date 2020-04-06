import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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
    private afAuthService: AngularFireAuth
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
      (data) => this.userSubject.next(data.user)
    ).catch(
      (error) => this.errorMessageSubject.next(error)
    );
  }

  public logout() {
    this.afAuthService.auth.signOut()
      .then(
        () => this.userSubject.next(null)
      ).catch(
        (error) => this.errorMessageSubject.next(error)
      );
  }

}
