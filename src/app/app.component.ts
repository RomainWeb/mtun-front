import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { DateTimeRepository } from '../infrastructure/datetime/repositories/dateTime.repository';
import { environment } from '../environments/environment';

@Component({
  selector: 'mtun-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  avatar = faker.image.avatar();
  constructor() {
    console.log(environment.apiUrl);
  }
}
