import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ITeamMember } from '../shared/interfaces';
import { TeamService } from './team.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {

  public members: ITeamMember[];

  teamMembers$: Observable<Array<ITeamMember>>;
  totalItems$: Observable<number>;

  constructor(
    private teamS: TeamService
  ) { }

  ngOnInit(): void {
    this.teamS.loadInitialState();
    this.teamS.load({});
    this.teamMembers$ = this.teamS.teamMembers$;
  }

  ngOnDestroy(): void{
    this.teamS.unsubcribe();
  }

}
