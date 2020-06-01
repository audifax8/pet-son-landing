import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, throwError, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  IPet,
  IBackResponse
} from '../shared/interfaces';

@Injectable()
export class PetService {

  private activeService$: Subject<void>;

  private page: number;
  private limit: number;

  private petsBehaviourSubject: BehaviorSubject<Array<IPet>> = new BehaviorSubject([]);
  pets$ = this.petsBehaviourSubject.asObservable();

  private totalItemsBehaviourSubject: BehaviorSubject<number> = new BehaviorSubject(null);
  totalItemsObservable$ = this.totalItemsBehaviourSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  public loadInitialState() {
    this.page = 1;
    this.limit = 5;
    this.activeService$ = new Subject<void>()
  }
  public nextPage() {
    this.page++;
  }

  public setRecordsPerPage(limit: number) {
    this.limit = limit;
  }

  public loadPets(queryParams: any) {
    const url = this.getQueryParams(queryParams);
    this.http.get<IBackResponse<Array<IPet>>>(url)
    .pipe(takeUntil(this.activeService$))
    .subscribe(
      backResponse => {
        this.petsBehaviourSubject.next(backResponse.data);
        this.totalItemsBehaviourSubject.next(backResponse.totalItems);
      }
    );
  }

  public unsubcribe() {
    this.activeService$.next();
    this.activeService$.complete();
  }

  private getQueryParams(queryParams: any): string {
    const aditionalParams = Object.keys(queryParams).reduce(
      (acc, curr) => `&${curr}=${queryParams[curr]}`, ''
    );
    return `${environment.api_url}pet/?page=${this.page}&limit=${this.limit}${aditionalParams}`;
  }


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
