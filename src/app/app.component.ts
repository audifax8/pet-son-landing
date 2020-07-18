import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services';
import { TranslateService } from '@ngx-translate/core';
import { LangName } from './shared/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly userService: UserService,
    public readonly translate: TranslateService
  ) { }

  ngOnInit() {

    this.translate.addLangs([LangName.ENGLISH, LangName.SPANISH]);
    this.translate.setDefaultLang(LangName.SPANISH);
    const userData = this.userService.getUserSession();
    if (userData) {
      this.userService.setUser(JSON.parse(userData));
    }
  }
}
