import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { TeamService } from './team.service';

const routes: Routes = [
  { path: '', component: TeamComponent }
];

const MODULES = [
  CommonModule,
  RouterModule.forChild(routes)
];

const COMPONENTS = [
  TeamComponent,
  MemberCardComponent
];

const SERVICES = [
  TeamService
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  providers: [
    ...SERVICES
  ]
})
export class TeamModule { }
