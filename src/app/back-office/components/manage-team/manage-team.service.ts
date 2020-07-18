import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  BehaviorSubject,
  combineLatest
} from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { IBackResponse } from '../../../shared/interfaces';
import { environment } from '../../../../environments/environment';
import { HttpService } from '../../../shared/services';

@Injectable()
export class ManageTeamService {

  private url = 'team-member/';

  private pageBS: BehaviorSubject<number> = new BehaviorSubject(1);
  page$ = this.pageBS.asObservable();

  private limitBS: BehaviorSubject<number> = new BehaviorSubject(50);
  limit$ = this.limitBS.asObservable();

  backResponse$: Observable<IBackResponse<Array<any>>> = combineLatest([
    this.page$,
    this.limit$
  ]).pipe(
    switchMap(([page, limit]) =>
      this.http.get<IBackResponse<Array<any>>>(`${environment.api_url + this.url}?page=${page}&limit=${limit}`)
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
    private readonly http: HttpClient,
    private readonly httpS: HttpService
  ) {
  }

  public setPage(page: number): void {
    this.pageBS.next(page);
  }

  public async delete(teamMemberId: string) {
    let backResponse;
    try {
      backResponse = await this.http.delete(
        `${environment.api_url + this.url}${teamMemberId}`,
        { headers: this.httpS.getHeader() }
      ).toPromise();
    } catch (ex) {
      backResponse = ex;
    }

    this.httpS.handleBackResponse(backResponse);
    return backResponse;
  }

  public async getById(teamMemberId: string) {
    let backResponse;
    try {
      backResponse = await this.http.get(
        `${environment.api_url + this.url}${teamMemberId}`,
        { headers: this.httpS.getHeader() }
      ).toPromise();
    } catch (ex) {
      backResponse = ex;
    }
    return backResponse;
  }

  public async post(teamMember) {
    let backResponse;
    try {
      backResponse = await this.http.post(
        `${environment.api_url + this.url}`,
        teamMember,
        { headers: this.httpS.getHeader() }
      ).toPromise();
    } catch(ex) {
      backResponse = ex;
    }
    this.httpS.handleBackResponse(backResponse);
    return backResponse
  }

  public async put(
    teamMemberId: string,
    teamMember
  ) {
    let backResponse;
    try {
      backResponse = await this.http.put(
        `${environment.api_url + this.url}${teamMemberId}`,
        teamMember,
        { headers: this.httpS.getHeader() }
      ).toPromise();
    } catch(ex) {
      backResponse = ex;
    }
    this.httpS.handleBackResponse(backResponse);
    return backResponse;
  }

}
