import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { MemberCardComponent } from './member-card/member-card.component';

const routes: Routes = [
  { path: '', component: TeamComponent }
];

const MODULES = [
  CommonModule,
  RouterModule.forChild(routes)
];

const COMPONENTS = [TeamComponent, MemberCardComponent];
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ]
})
export class TeamModule { }
