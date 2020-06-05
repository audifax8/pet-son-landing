import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {
  BehaviorSubject,
  combineLatest,
  Observable
} from 'rxjs';
import {
  switchMap,
  map
} from 'rxjs/operators';
import {
  IPet,
  IBackResponse
} from '../shared/interfaces';

@Injectable()
export class PetService {

  private pageBS: BehaviorSubject<number> = new BehaviorSubject(1);
  page$ = this.pageBS.asObservable();

  private limitBS: BehaviorSubject<number> = new BehaviorSubject(10);
  limit$ = this.limitBS.asObservable();

  private adoptedBS: BehaviorSubject<boolean> = new BehaviorSubject(null);
  adopted$ = this.adoptedBS.asObservable();

  backResponse$: Observable<IBackResponse<Array<IPet>>> = combineLatest([
    this.page$,
    this.limit$,
    this.adopted$
  ]).pipe(
    switchMap(([page, limit, adopted]) =>
      this.http.get<IBackResponse<Array<IPet>>>(`${environment.api_url}pet/?page=${page}&limit=${limit}&adopted=${adopted}`)
    )
  );

  pets$ = combineLatest([
    this.backResponse$
  ]).pipe(
    map(([backResponse]) => backResponse.data)
  );

  totalItems$ = combineLatest([
    this.backResponse$
  ]).pipe(
    map(([backResponse]) => backResponse.totalItems)
  );

  errors$ = combineLatest([
    this.backResponse$
  ]).pipe(
    map(([backResponse]) => backResponse.errors)
  );

  constructor(
    private http: HttpClient
  ) { }

  public setPage(page: number) {
    this.pageBS.next(page);
  }

  public setLimit(limit: number) {
    this.limitBS.next(limit);
  }

  public setAdopted(adopted: boolean) {
    this.adoptedBS.next(adopted);
  }

}
