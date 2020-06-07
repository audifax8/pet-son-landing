import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SponsorsComponent } from './sponsors.component';
import { SponsorCardComponent } from './sponsor-card/sponsor-card.component';

const routes: Routes = [
  { path: '', component: SponsorsComponent }
];

const MODULES = [
  CommonModule,
  RouterModule.forChild(routes)
];

const COMPONETS = [
  SponsorsComponent,
  SponsorCardComponent
];

@NgModule({
  declarations: [
    ...COMPONETS
  ],
  imports: [
    ...MODULES
  ]
})
export class SponsorsModule { }
