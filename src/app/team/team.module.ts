import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team.component';
import { TeamService } from './team.service';

import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  { path: '', component: TeamComponent }
];

const MODULES = [
  CommonModule,
  RouterModule.forChild(routes),
  TranslateModule.forChild()
];

const COMPONENTS = [
  TeamComponent
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
