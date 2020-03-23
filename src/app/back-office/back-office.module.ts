import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BackOficeComponent } from './back-ofice/back-ofice.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth/auth.guard';
import { UserService } from './services/user/user.service';

const routes: Routes = [
  { path: '', component: BackOficeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

const MODULES = [
  CommonModule,
  RouterModule.forChild(routes)
];

const COMPONETS = [
  BackOficeComponent,
  LoginComponent
];

const SERVICES = [
  AuthGuard,
  UserService
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
