import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { BackOficeComponent } from './back-ofice/back-ofice.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth/auth.guard';
import { MenuBackOfficeComponent } from './components/menu-back-office/menu-back-office.component';
import { NewPetComponent } from './components/new-pet/new-pet.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetTypeComponent } from './components/pet-type/pet-type.component';

const routes: Routes = [
  { path: '', component: BackOficeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'new-pet', pathMatch: 'full' },
      { path: 'new-pet', component: NewPetComponent, canActivate: [AuthGuard] },
      { path: 'pets', component: PetsComponent, canActivate: [AuthGuard] },
      { path: 'pet-type', component: PetTypeComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: 'login', component: LoginComponent }
];

const MODULES = [
  CommonModule,
  RouterModule.forChild(routes),
  ReactiveFormsModule,
  FormsModule
];

const COMPONETS = [
  BackOficeComponent,
  LoginComponent,
  MenuBackOfficeComponent,
  NewPetComponent,
  PetsComponent,
  PetTypeComponent
];

const SERVICES = [
  AuthGuard
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
