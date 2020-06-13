import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../shared/services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

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
    public route: ActivatedRoute,
    public userS: UserService
  ) { }

  ngOnInit(): void {
  }

  public logout() {
    this.userS.logout();
  }

  public openMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

}
