import { Component, Input } from '@angular/core';

@Component({
  selector: 'mtun-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  color?: string; // Add color param
}
