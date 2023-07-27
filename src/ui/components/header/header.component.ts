import { Component, Input } from '@angular/core';

@Component({
  selector: 'mtun-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() logo: string = '';
}
