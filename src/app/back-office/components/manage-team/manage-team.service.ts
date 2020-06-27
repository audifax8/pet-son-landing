import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ManageTeamService {

  private teamMembersSubject: Subject<any> = new Subject();
  public teamMembers$: Observable<any> = this.teamMembersSubject.asObservable();

  constructor(
  ) {
  }

}
