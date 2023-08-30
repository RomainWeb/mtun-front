import { Directive, HostBinding, Input } from '@angular/core';
import { UiComponentSize } from '../types/component-size.type';
import { Subject } from 'rxjs';
import { UiComponentStatus } from '../types/component-status.type';

@Directive({
  selector: 'input[UiInput], textarea[UiInput]',
})
export class InputDirective {
  protected destroy$ = new Subject<void>();

  @Input() fieldSize: UiComponentSize = 'medium';
  @Input() status: UiComponentStatus = 'basic';

  constructor() {}

  // SIZE
  @HostBinding('class.size-tiny')
  get tiny() {
    return this.fieldSize === 'tiny';
  }

  @HostBinding('class.size-small')
  get small() {
    return this.fieldSize === 'small';
  }

  @HostBinding('class.size-medium')
  get medium() {
    return this.fieldSize === 'medium';
  }

  @HostBinding('class.size-large')
  get large() {
    return this.fieldSize === 'large';
  }

  @HostBinding('class.size-giant')
  get giant() {
    return this.fieldSize === 'giant';
  }

  // STATUS
  @HostBinding('class.status-primary')
  get primary() {
    return this.status === 'primary';
  }

  @HostBinding('class.status-info')
  get info() {
    return this.status === 'info';
  }

  @HostBinding('class.status-success')
  get success() {
    return this.status === 'success';
  }

  @HostBinding('class.status-warning')
  get warning() {
    return this.status === 'warning';
  }

  @HostBinding('class.status-danger')
  get danger() {
    return this.status === 'danger';
  }

  @HostBinding('class.status-basic')
  get basic() {
    return this.status === 'basic';
  }

  @HostBinding('class.status-control')
  get control() {
    return this.status === 'control';
  }
}
