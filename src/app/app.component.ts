import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly userService: UserService,
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
    const userData = localStorage.getItem('PetSonUser');
    if (userData) {
      this.userService.setUser(userData);
    }
  }
}
