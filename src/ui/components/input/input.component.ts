import { Component, Input } from '@angular/core';

@Component({
  selector: 'mtun-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input()
  type: 'text' | 'tel' | 'url' | 'email' | 'password' | ' number' = 'text';

  @Input() placeholder: string = '';

  @Input() required: boolean = false;
}
