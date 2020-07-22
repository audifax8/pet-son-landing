import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../shared/services';
import { ContactService } from './contact.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { RecaptchaComponent } from 'ng-recaptcha';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  @ViewChild('recaptchaComponent') recaptchaComponent: RecaptchaComponent;

  public contactForm: FormGroup;
  public captchaKey: string = environment.captcha_key;

  private activeComponent$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private fs: FormService,
    private contactS: ContactService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy() : void {
    this.activeComponent$.next();
    this.activeComponent$.complete();
  }

  public formInputNoValid(inputName: string) {
    return this.fs.isTouchedOrDirtyAndInvalid(inputName, this.contactForm);
  }

  createForm () {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required]],
      phoneNumber: [, [Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'), Validators.required]],
      message: ['', Validators.required],
      recaptchaReactive: this.fb.group({
        captcha: [false, Validators.requiredTrue]
      }),
      policies: [false, Validators.requiredTrue]
    });
  }

  submit () {
    if (this.contactForm.invalid) {
      return this.fs.markAsTouchedAndMarkAsDirty(this.contactForm);
    }
    this.contactS.submitForm(this.contactForm)
      .pipe(takeUntil(this.activeComponent$))
      .subscribe(() => {
        this.fs.reset(this.contactForm);
      });
  }

  resolved (captchaToken: string) {
    if (!captchaToken) {
      this.contactForm.get('recaptchaReactive.captcha').setValue(false);
      return;
    }
    this.contactS.sendCaptchaToken(captchaToken)
      .pipe(takeUntil(this.activeComponent$))
      .subscribe(
        (success:boolean) => {
        this.contactForm.get('recaptchaReactive.captcha').setValue(success);
      });
  }

  reset(): void {
    this.fs.reset(this.contactForm);
    this.recaptchaComponent.reset();
  }

}
