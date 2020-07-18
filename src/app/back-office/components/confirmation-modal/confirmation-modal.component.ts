import { Component, OnInit, TemplateRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {

  private modalRef: BsModalRef;
  @ViewChild('modal') modal: TemplateRef<any>

  @Output() confirmationResult: EventEmitter<any> = new EventEmitter();

  private teamMemberId: string;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  public show(teamMemberId: string) {
    this.teamMemberId = teamMemberId;
    this.modalRef = this.modalService.show(
      this.modal
    );
  }

  public confirm() {
    const data = {
      result: true,
      teamMemberId: this.teamMemberId
    };
    this.confirmationResult.emit(data);
  }

  public decline() {
    const data = {
      result: false,
      teamMemberId: this.teamMemberId
    };
    this.confirmationResult.emit(data);
    this.hide();
  }

  public hide() {
    this.modalRef.hide();
  }

}
