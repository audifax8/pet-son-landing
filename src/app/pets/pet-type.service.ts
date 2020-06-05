import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import {
  IPetType,
  IBackResponse
} from '../shared/interfaces';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class PetTypeService {

  private pageBS: BehaviorSubject<number> = new BehaviorSubject(1);
  page$ = this.pageBS.asObservable();

  private limitBS: BehaviorSubject<number> = new BehaviorSubject(50);
  limit$ = this.limitBS.asObservable();

  backResponse$: Observable<IBackResponse<Array<IPetType>>> = combineLatest([
    this.page$,
    this.limit$
  ]).pipe(
    switchMap(([page, limit]) =>
      this.http.get<IBackResponse<Array<IPetType>>>(`${environment.api_url}pet-type/?page=${page}&limit=${limit}`)
    )
  );

  petTypes$ = combineLatest([
    this.backResponse$
  ]).pipe(
    map(([backResponse])=> backResponse.data)
  );

  constructor(
    private http: HttpClient
  ) { }

}
