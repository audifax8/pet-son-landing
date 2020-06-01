import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pet-son-landing';
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  /**
   *
   */
  constructor(
  ) {
  }
}
