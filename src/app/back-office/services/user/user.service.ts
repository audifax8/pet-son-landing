import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private userLogged = false;

  private user: any;

  constructor() { }

  public isUserLogged(): boolean {
    return this.userLogged;
  }

  public setUser(user): void {
    this.user = user;
  }

  public setUserLogged(userLogged: boolean): void {
    this.userLogged = userLogged;
  }

}
