import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {
  throwError,
  Observable,
  combineLatest
} from 'rxjs';
import {
  ITeamMember,
  IBackResponse
} from '../shared/interfaces';
import { map } from 'rxjs/operators';

@Injectable()
export class TeamService {

  backResponse$: Observable<IBackResponse<Array<ITeamMember>>> =
    this.http.get<IBackResponse<Array<ITeamMember>>>(`${environment.api_url}team-member/?page=1&limit=100`);

  teamMembers$ = combineLatest([
    this.backResponse$
  ]).pipe(
    map(([backResponse]) => backResponse.data)
  );

  constructor(
    private http: HttpClient
  ) { }


  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
