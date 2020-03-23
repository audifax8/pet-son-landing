import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'team',
    loadChildren: () =>
      import('./team/team.module').then(m => m.TeamModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'sponsors',
    loadChildren: () =>
      import('./sponsors/sponsors.module').then(m => m.SponsorsModule)
  },
  {
    path: 'pets',
    loadChildren: () =>
      import('./pets/pets.module').then(m => m.PetsModule)
  },
  {
    path: 'back-office',
    loadChildren: () =>
      import('./back-office/back-office.module').then(m => m.BackOfficeModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
