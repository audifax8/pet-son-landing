import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BackOfficeComponent } from './back-office/back-office.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth/auth.guard';
import { NewPetComponent } from './components/new-pet/new-pet.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetTypeComponent } from './components/pet-type/pet-type.component';

import { ManageTeamComponent } from './components/manage-team/manage-team.component';
import { ManageTeamService } from './components/manage-team/manage-team.service';

import { ManagePetsComponent } from './components/manage-pets/manage-pets.component';
import { NewTeamMemberComponent } from './components/new-team-member/new-team-member.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';

const routes: Routes = [
  { path: '', component: BackOfficeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'manage-team', pathMatch: 'full' },
      { path: 'new-pet', component: NewPetComponent, canActivate: [AuthGuard] },
      { path: 'pets', component: PetsComponent, canActivate: [AuthGuard] },
      { path: 'pet-type', component: PetTypeComponent, canActivate: [AuthGuard] },
      { path: 'new-team-member', component: NewTeamMemberComponent, canActivate: [AuthGuard] },
      { path: 'new-team-member/:teamMemberId', component: NewTeamMemberComponent, canActivate: [AuthGuard] },
      { path: 'manage-pets', component: ManagePetsComponent, canActivate: [AuthGuard] },
      { path: 'manage-team', component: ManageTeamComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: 'login', component: LoginComponent }
];

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule.forChild(routes)
];

const COMPONETS = [
  BackOfficeComponent,
  LoginComponent,
  NewPetComponent,
  PetsComponent,
  PetTypeComponent,
  NewTeamMemberComponent,
  ManageTeamComponent,
  ManagePetsComponent,
  ConfirmationModalComponent
];

const SERVICES = [
  AuthGuard,
  ManageTeamService
];

@NgModule({
  declarations: [
    ...COMPONETS
  ],
  imports: [
    ...MODULES
  ],
  providers: [
    ...SERVICES
  ]
})
export class BackOfficeModule { }
