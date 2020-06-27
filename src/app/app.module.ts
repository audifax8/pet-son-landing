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
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './dashboard/home/home.component';
import { HomeService } from './dashboard/home/home.service';
import { NavComponent } from './dashboard/nav/nav.component';
import { FooterComponent } from './dashboard/footer/footer.component';

/*const config = {
  apiKey: "AIzaSyCvf6iAhHCfa9QEGRcmi3323XydTsaCpz8",
  authDomain: "petson-app.firebaseapp.com",
  databaseURL: "https://petson-app.firebaseio.com",
  projectId: "petson-app",
  storageBucket: "petson-app.appspot.com",
  messagingSenderId: "13184177745",
  appId: "1:13184177745:web:83a94f0eb103f218"
};*/

const config = {
  apiKey: "AIzaSyAz1re1Um7Mv8wbSVhneMCFoNM_hJtgV4Y",
  authDomain: "petson-34f89.firebaseapp.com",
  databaseURL: "https://petson-34f89.firebaseio.com",
  projectId: "petson-34f89",
  storageBucket: "petson-34f89.appspot.com",
  messagingSenderId: "241043650684",
  appId: "1:241043650684:web:671402936a775447b831f9",
  measurementId: "G-12N7DTW409"
}

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
  PaginationModule.forRoot(),
  CarouselModule.forRoot(),
  CollapseModule.forRoot()
];

const COMPONENTS = [
  AppComponent,
  HomeComponent,
  NavComponent,
  FooterComponent
];

const SERVICES = [
  HomeService
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
  providers: [
    ...SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
