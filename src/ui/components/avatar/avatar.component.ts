import { Component, Input } from '@angular/core';

@Component({
  selector: 'mtun-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input({ required: true }) img: string = '';
  @Input() alt: string = 'avatar image';
}
