import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ConfigService {

  private showLoadingAnimationBS = new BehaviorSubject(false);
  public showLoading$ = this.showLoadingAnimationBS.asObservable();

  public setLoadingState(state: boolean): void {
    this.showLoadingAnimationBS.next(state);
  }
}
