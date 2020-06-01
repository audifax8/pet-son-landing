import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, throwError, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  IPetType,
  IBackResponse
} from '../shared/interfaces';

@Injectable()
export class PetTypeService {

  private activeService$: Subject<void>;

  private page: number;
  private limit: number;

  private petTypesBehaviourSubject: BehaviorSubject<Array<IPetType>> = new BehaviorSubject([]);
  petTypes$ = this.petTypesBehaviourSubject.asObservable();


  constructor(
    private http: HttpClient
  ) { }

  public loadInitialState() {
    this.page = 1;
    this.limit = 40;
    this.activeService$ = new Subject<void>()
  }

  public load(queryParams: any) {
    const url = this.getQueryParams(queryParams);
    this.http.get<IBackResponse<Array<IPetType>>>(url)
    .pipe(takeUntil(this.activeService$))
    .subscribe(
      backResponse =>
        this.petTypesBehaviourSubject.next(backResponse.data)
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
    return `${environment.api_url}pet-type/?page=${this.page}&limit=${this.limit}`;
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
