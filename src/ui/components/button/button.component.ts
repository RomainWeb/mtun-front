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
  style?: 'basic' | 'raised' | 'stroked' | 'flat' = 'flat';
  @Input()
  type?: 'button' | 'submit' | 'reset' = 'button';
  @Input()
  isRounded?: boolean = true;
  @Input()
  isDisabled?: boolean = false;
}
