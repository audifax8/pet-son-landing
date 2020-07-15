import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../services';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderAnimationInterceptor implements HttpInterceptor {

  constructor(
    private readonly confS: ConfigService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.confS.setLoadingState(true);
    return next.handle(request).pipe(finalize(() => this.confS.setLoadingState(false)));
  }
}
