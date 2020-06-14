import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  healthResponse$;

  healthResponseDummiData$;

  constructor(
    private homeS: HomeService
  ) { }

  ngOnInit(): void {
    this.healthResponse$ = this.homeS.backResponse$;
    this.healthResponseDummiData$ = this.homeS.backResponseDummiData$;
  }

}
