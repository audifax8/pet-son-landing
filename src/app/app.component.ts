import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit() {
    const userData = localStorage.getItem('PetSonUser');
    if (userData) {
      this.userService.setUser(userData);
    }
  }
}
