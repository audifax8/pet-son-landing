import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
import { map } from "rxjs/operators";

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  submitForm (formGroup: FormGroup) {
    let formData = formGroup.value;
    let reqBody = {};

    [
     'name',
     'email',
     'phoneNumber',
     'message',
     'policies'
    ].forEach(field => {
      reqBody[field] = formData[field];
    });
    return this.http.post(`${environment.api_url}contactus`, reqBody);
  }

  sendCaptchaToken (token) {
    return this.http.post(`${environment.api_url}contactus/captcha`, {token})
      .pipe(map((data:any) => data.data.success))
  }
}
