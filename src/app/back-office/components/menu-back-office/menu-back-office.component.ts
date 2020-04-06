import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-back-office',
  templateUrl: './menu-back-office.component.html',
  styleUrls: ['./menu-back-office.component.scss']
})
export class MenuBackOfficeComponent implements OnInit {

  public links = [
    { title: 'Nueva mascota', fragment: 'new-pet' }
  ];

  public link = { title: 'Nueva mascota', fragment: 'new-pet' };

  public link1 = { title: 'Nuevo Tipo Mascota', fragment: 'pet-type' };

  constructor() { }

  ngOnInit(): void {
  }

}
