import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.scss']
})
export class BackOfficeComponent implements OnInit {

  public links = [
    { title: 'Nueva mascota', fragment: 'new-pet' },
    { title: 'Nuevo tipo mascota', fragment: 'pet-type' },
    { title: 'Crear miembro equipo', fragment: 'new-team-member' },
    { title: 'Administrar mascotas', fragment: 'manage-pets' },
    { title: 'Administrar equipo', fragment: 'manage-team' },
    { title: 'Todas las mascotas', fragment: 'pets' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
