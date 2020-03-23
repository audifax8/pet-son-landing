import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private userLogged = false;

  constructor() { }

  public isUserLogged(): boolean {
    return this.userLogged;
  }
}
