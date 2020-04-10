import { Injectable } from '@angular/core';
import {
    DataBaseService
} from '../../../shared/services';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ManageTeamService {

  private teamMembersSubject: Subject<any> = new Subject();
  public teamMembers$: Observable<any> = this.teamMembersSubject.asObservable();

  public test$ = this.dbS.getCollection(
    'team-member'
  ).pipe(
    map(
      actions => actions.map(a => {
        return { ...a.payload.doc.data(), firebaseId: a.payload.doc.id};
      })
    )
  );

  constructor(
    private dbS: DataBaseService
  ) {
    // this.loadTeamMembers();
  }
  private loadTeamMembers() {
    this.dbS.getCollection(
      'team-member'
    ).subscribe(
      data => this.teamMembersSubject.next(data),
      err => console.log(err)
    );
  }

}
