import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {
  Observable
} from 'rxjs';

import { IBackResponse } from '../../shared/interfaces';

@Injectable()
export class HomeService {

  backResponse$: Observable<any> =
    this.http.get<IBackResponse<any>>(`${environment.api_url}_health`);

  constructor(
    private http: HttpClient
  ) { }

}
