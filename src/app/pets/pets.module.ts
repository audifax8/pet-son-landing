import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PetsComponent } from './pets.component';
import { PetService } from './pet.service';
import { PetTypeService } from './pet-type.service';

const routes: Routes = [
  { path: '', component: PetsComponent }
];

const MODULES = [
  CommonModule,
  RouterModule.forChild(routes),
  ReactiveFormsModule,
  FormsModule
];

const COMPONETS = [
  PetsComponent
];

const SERVICES = [
  PetService,
  PetTypeService
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
export class PetsModule { }
