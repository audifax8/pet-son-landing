import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { UserService } from '../../shared/services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isBackOfficeRoute;

  public links = [
    { title: 'Patrocinadores', fragment: 'sponsors' },
    { title: 'Contácto', fragment: 'contact' },
    // { title: 'Últimas adopciones', fragment: 'pets', param: 'adopted' },
    // { title: 'Por Adoptar', fragment: 'pets', param: 'pending' },
    { title: 'Equipo PetSon', fragment: 'team' }
  ];

  public activeId = '';

  public isCollapsed = true;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public userS: UserService
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

}
