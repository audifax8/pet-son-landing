import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module'; 

import { AppComponent } from './app.component';

import { HomeComponent } from './dashboard/home/home.component';
import { NavComponent } from './dashboard/nav/nav.component';
import { FooterComponent } from './dashboard/footer/footer.component';

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  NgbModule,
  CoreModule,
  SharedModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
