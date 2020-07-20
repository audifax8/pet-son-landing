import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../shared/services';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  captchaKey: string = '6LfnXbMZAAAAAC8H3gDop54mO976thXpOX4ql7o4';

  constructor(
    private fb: FormBuilder, 
    private fs: FormService, 
    private contactS: ContactService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  get nameNoValid() {
    return this.fs.isTouchedOrDirtyAndInvalid('name', this.contactForm);
  }
  get emailNoValid() {
    return this.fs.isTouchedOrDirtyAndInvalid('email', this.contactForm);
  }
  get phoneNumberNoValid() {
    return this.fs.isTouchedOrDirtyAndInvalid('phoneNumber', this.contactForm);
  }
  get messageNoValid() {
    return this.fs.isTouchedOrDirtyAndInvalid('message', this.contactForm);
  }
  get policiesNoValid() {
    return this.fs.isTouchedOrDirtyAndInvalid('policies', this.contactForm);
  }
  get captchaNoValid() {
    return this.fs.isTouchedOrDirtyAndInvalid('recaptchaReactive.captcha', this.contactForm);
  }

  createForm () {
    this.contactForm = this.fb.group({
      name: ['Jose', Validators.required],
      email: ['cardonarendonjd@gmail.com', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required]],
      phoneNumber: [3206656775, [Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'), Validators.required]],
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
      .subscribe(
        (success:boolean) => {
        this.contactForm.get('recaptchaReactive.captcha').setValue(success);
      });
  }
}
