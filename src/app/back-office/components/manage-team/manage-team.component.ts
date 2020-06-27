import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ManageTeamService } from './manage-team.service';
import {
  ExternalLibsService
} from '../../../shared/services';


@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.component.html',
  styleUrls: ['./manage-team.component.scss']
})
export class ManageTeamComponent implements OnInit {

  public teamMembers$: Observable<any>;

  public isDevMode: boolean;

  constructor(
    public router: Router,
    private mtS: ManageTeamService,
    private externalLibsS: ExternalLibsService
  ) {
    this.isDevMode = this.externalLibsS.isDevMode;
  }

  ngOnInit(): void {
  }

  public edit(teamMemberId): void {
    this.router.navigate([`back-office/new-team-member/${teamMemberId}`]);
  }

  public delete(teamMemberId): void {
  }

}
