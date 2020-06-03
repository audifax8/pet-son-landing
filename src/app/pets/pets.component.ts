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

  queryParams;
  pets$: Observable<Array<IPet>>;
  petTypes$: Observable<Array<IPetType>>;
  totalItems$: Observable<number>;

  page;

  currentPage = 4;
  smallnumPages = 0;

  activeComponent$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private petS: PetService,
    private petTS: PetTypeService
  ) { }

  ngOnInit() {
    this.pets$ = this.petS.pets$;
    this.totalItems$ = this.petS.totalItemsObservable$;
    this.petTypes$ = this.petTS.petTypes$;
    this.route.queryParams
      .pipe(takeUntil(this.activeComponent$))
      .subscribe(params => {
        const adopted = (params.param === 'adopted') ? true: false;
        this.queryParams = { ...this.queryParams, adopted};
        this.petS.loadInitialState();
        this.petS.loadPets(this.queryParams);
        this.petTS.loadInitialState();
        this.petTS.load({});
      });
  }

  ngOnDestroy() {
    this.activeComponent$.next();
    this.activeComponent$.complete();
    this.petS.unsubcribe();
  }

  public nextPage(e) {
    this.petS.nextPage();
    this.petS.loadPets(this.queryParams);
  }

  public changeRecordsPerPage(e) {
    console.log(e);
    // this.petS.setRecordsPerPage(this.itemsPerPage);
  }

}
