import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PetService } from './pet.service';
import { IPet, IPetType } from '../shared/interfaces';
import { PetTypeService } from './pet-type.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit, OnDestroy {

  pets$: Observable<Array<IPet>>;
  totalItems$: Observable<number>;

  petTypes$: Observable<Array<IPetType>>;

  activeComponent$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private petS: PetService,
    private petTS: PetTypeService
  ) { }

  ngOnInit() {
    this.pets$ = this.petS.pets$;
    this.totalItems$ = this.petS.totalItems$;
    this.pets$ = this.petS.pets$;
    this.petTypes$ = this.petTS.petTypes$;
    this.route.queryParams
      .pipe(takeUntil(this.activeComponent$))
      .subscribe(params => {
        const adopted = (params.param === 'adopted') ? true: false;
        this.petS.setAdopted(adopted);
      });
  }

  ngOnDestroy() {
    this.activeComponent$.next();
    this.activeComponent$.complete();
  }

  public changeRecordsPerPage(e) {
  }

  public setPage(page: number) {
  }

  public setLimit(limit: number) {
  }

}
