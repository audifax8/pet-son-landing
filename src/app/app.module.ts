import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/** Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './dashboard/home/home.component';
import { NavComponent } from './dashboard/nav/nav.component';
import { FooterComponent } from './dashboard/footer/footer.component';

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
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  HttpClientModule,
  AngularFireModule.initializeApp(config),
  AngularFirestoreModule, // firestore
  AngularFireAuthModule, // auth
  AngularFireStorageModule,
  SharedModule,
  /* NGX Bootstrapt */
  AccordionModule.forRoot(),
  BsDropdownModule.forRoot(),
  PaginationModule.forRoot()
];

const COMPONENTS = [
  AppComponent,
  HomeComponent,
  NavComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }