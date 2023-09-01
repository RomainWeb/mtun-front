import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'mtun-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  avatar = faker.image.avatar();

  constructor() {}
}
