import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha'; 

import { ContactService } from './contact.service';

import { TranslateModule } from '@ngx-translate/core';

const COMPONENTS = [
  ContactComponent
];

const SERVICES = [
  ContactService
]

const routes: Routes = [
  { path: '', component: ContactComponent }
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    TranslateModule.forChild()
  ],
  providers: [
    ...SERVICES
  ]
})
export class ContactModule { }
