import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'mtun-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  avatar = faker.image.avatar();

  constructor() {}

  ngOnInit(): void {
    initFlowbite();
  }
}
