import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd
} from '@angular/router';
import { UserService } from '../../shared/services';
import { TranslateService } from '@ngx-translate/core';
import { LangName } from '../../shared/enums';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isBackOfficeRoute;

  LangName = LangName;

  public links = [
    { title: 'NAV.SPONSORS', fragment: 'sponsors' },
    { title: 'NAV.CONTACT', fragment: 'contact' },
    // { title: 'Últimas adopciones', fragment: 'pets', param: 'adopted' },
    // { title: 'Por Adoptar', fragment: 'pets', param: 'pending' },
    { title: 'NAV.TEAM', fragment: 'team' }
  ];

  public isCollapsed = true;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public userS: UserService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((routerChange) => {
      if (routerChange instanceof NavigationEnd) {
        this.isBackOfficeRoute = routerChange.url.includes('back-office');
      }
    });
  }

  public logout() {
    this.userS.logout();
  }

  public openMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  public goToBackOffice() {
    this.router.navigate(['back-office']);
  }

  public changeLang(lan: string) {
    this.translate.use(lan);
  }

}
