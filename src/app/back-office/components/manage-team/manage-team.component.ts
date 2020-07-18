import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ManageTeamService } from './manage-team.service';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.component.html',
  styleUrls: ['./manage-team.component.scss']
})
export class ManageTeamComponent implements OnInit, AfterViewInit {

  @ViewChild('confirmationModal') confirmationModal: ConfirmationModalComponent;

  public teamMembers$: Observable<any>;

  public totalItems$: Observable<number>;

  public isDevMode: boolean;

  constructor(
    public router: Router,
    private mtS: ManageTeamService,
  ) {
    this.isDevMode = environment.isDevMode;
    this.teamMembers$ = this.mtS.teamMembers$;
    this.totalItems$ = this.mtS.totalItems$;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  public redirect(teamMemberId?: string): void {
    if (teamMemberId) {
      this.router.navigate([`back-office/new-team-member/${teamMemberId}`]);
    } else {
      this.router.navigate([`back-office/new-team-member`]);
    }
  }

  public delete(teamMemberId: string): void {
    this.confirmationModal.show(teamMemberId);
  }

  public async onResult(event) {
    if (event.result) {
      this.confirmationModal.hide();
      await this.mtS.delete(event.teamMemberId);
      this.mtS.setPage(1);
    }
  }

}
