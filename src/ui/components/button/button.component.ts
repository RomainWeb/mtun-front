import { Component, Input } from '@angular/core';

@Component({
  selector: 'mtun-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  color?: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input()
  size?: 'extra-small' | 'small' | 'base' | 'large' | 'extra-large' = 'base';
  @Input()
  type?: 'basic' | 'raised' | 'stroked' | 'flat' = 'raised';
  @Input()
  isRounded?: boolean = true;
}
