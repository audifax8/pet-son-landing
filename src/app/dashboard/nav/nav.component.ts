import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
