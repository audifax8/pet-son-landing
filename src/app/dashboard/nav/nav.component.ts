import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../../shared/services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public links = [
    { title: 'Equipo', fragment: 'team' },
    { title: 'Contanto', fragment: 'contact' },
    { title: 'Colaboradores', fragment: 'sponsors' },
    { title: 'Últimas adopciones', fragment: 'pets', param: 'adopted' },
    { title: 'Por Adoptar', fragment: 'pets', param: 'pending' }
  ];

  public activeId = '';

  constructor(
    public route: ActivatedRoute,
    public userS: UserService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public logout() {
    /*this.afAuth.auth.signOut().then((res) => {
      this.router.navigate(['/']);
      this.userS.setUser(null);
    });*/
  }

}
