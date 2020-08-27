import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
