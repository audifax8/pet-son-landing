import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';
import { LangName } from '../enums';

@Injectable()
export class HttpService {

  constructor(
    private readonly userS: UserService,
    private readonly toastS: ToastrService
  ) { }

  public getHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${this.userS.getUserToken()}`);
    headers = headers.set('Accept-Language', LangName.SPANISH);
    return headers;
  }

  public handleBackResponse(backResponse) {
    switch(backResponse.status) {
      case 200:
      case 201:
        this.toastS.success('Operación realizada correctamente.');
        break;
      case 403:
      case 401:
        this.toastS.info('Por favor inicie sesión de nuevo.');
        break;
      case 400:
      case 404:
      case 500:
        this.toastS.error(backResponse.error);
      default:
        this.toastS.error('Ocurrió un error inesperado.');
        break;
    }
  }

}
