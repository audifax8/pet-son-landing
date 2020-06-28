import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { IBackResponse } from '../../../shared/interfaces';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ManageTeamService {

  private pageBS: BehaviorSubject<number> = new BehaviorSubject(1);
  page$ = this.pageBS.asObservable();

  private limitBS: BehaviorSubject<number> = new BehaviorSubject(50);
  limit$ = this.limitBS.asObservable();

  backResponse$: Observable<IBackResponse<Array<any>>> = combineLatest([
    this.page$,
    this.limit$
  ]).pipe(
    switchMap(([page, limit]) =>
      this.http.get<IBackResponse<Array<any>>>(`${environment.api_url}team-member/?page=${page}&limit=${limit}`)
    )
  );

  teamMembers$ = combineLatest([
    this.backResponse$
  ]).pipe(
    map(([backResponse])=> backResponse.data)
  );

  totalItems$ = combineLatest([
    this.backResponse$
  ]).pipe(
    map(([backResponse])=> backResponse.totalItems)
  );

  constructor(
    private http: HttpClient
  ) {
  }

}
