import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teamMembers$;

  constructor(
    private teamS: TeamService
  ) { }

  ngOnInit(): void {
    this.teamMembers$ = this.teamS.teamMembers$;
  }

}
