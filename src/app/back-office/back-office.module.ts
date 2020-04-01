import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { BackOficeComponent } from './back-ofice/back-ofice.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth/auth.guard';
import { UserService } from './services/user/user.service';

const routes: Routes = [
  { path: '', component: BackOficeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

const config = {
  apiKey: "AIzaSyCvf6iAhHCfa9QEGRcmi3323XydTsaCpz8",
  authDomain: "petson-app.firebaseapp.com",
  databaseURL: "https://petson-app.firebaseio.com",
  projectId: "petson-app",
  storageBucket: "petson-app.appspot.com",
  messagingSenderId: "13184177745",
  appId: "1:13184177745:web:83a94f0eb103f218"
};

const MODULES = [
  CommonModule,
  RouterModule.forChild(routes),
  ReactiveFormsModule,
  FormsModule,
  AngularFireModule.initializeApp(config),
  AngularFirestoreModule, // firestore
  AngularFireAuthModule, // auth
  AngularFireStorageModule
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
