import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {

  private userSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public user$ = this.userSubject.asObservable();

  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  constructor(
    private afAuthService: AngularFireAuth,
    private router: Router,
    private http: HttpClient
  ) {
    this.afAuthService.user
      .pipe(
        map((user) => this.userSubject.next(user))
      );
  }

  private async mapUserFromAccesType(accesType, data) {
    let user;
    switch(accesType) {
      case 'USER_PASSWORD':
        user =  {
          id: data.user.uid,
          email: data.user.email
        };
        break;
      case 'GOOGLE':
        user = data.additionalUserInfo.profile;
        break;
      default:
        break;
    }
    try {
      const resposeToken: any =  await this.getAccesToken(user.id).toPromise();
      user.token = resposeToken.data;
    } catch(ex) {}
    return user;
  }

  public setUser(user) {
    this.userSubject.next(user);
    localStorage.setItem('PetSonUser', JSON.stringify(user));
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  async AuthLogin(provider) {
    try {
      this.errorMessageSubject.next(null);
      const response = await  this.afAuthService.auth.signInWithPopup(provider);
      const user = await this.mapUserFromAccesType('GOOGLE', response);
      this.setUser(user);
    }catch (ex) {
      this.userSubject.next(null);
      this.errorMessageSubject.next(ex.message);
    }
  }

  public async login(
    email: string,
    password: string
  ) {
    try {
      const response = await this.afAuthService.auth.signInWithEmailAndPassword(
        email,
        password
      );
      this.errorMessageSubject.next(null);
      const user = await this.mapUserFromAccesType('USER_PASSWORD', response);
      this.setUser(user);
    } catch (ex) {
      this.userSubject.next(null);
      this.errorMessageSubject.next(ex.message);
    }
  }

  private getAccesToken(userId: string) {
    return this.http.post(`${environment.api_url}user/token`, {userId});
  }

  public logout() {
    this.afAuthService.auth.signOut()
      .then(
        () => {
          localStorage.removeItem('PetSonUser');
          this.userSubject.next(null);
          this.errorMessageSubject.next(null);
          this.router.navigate(['back-office/login']);
        }
      ).catch(
        (error) => this.errorMessageSubject.next(error)
      );
  }

}
