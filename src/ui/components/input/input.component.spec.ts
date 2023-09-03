import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, DebugElement, Input } from '@angular/core';
import { InputDirective } from './input.directive';
import { By } from '@angular/platform-browser';
import { UiComponentSize } from '../types/component-size.type';
import { UiComponentStatus } from '../types/component-status.type';

@Component({
  template: ` <input UiInput [fieldSize]="size" [status]="status" /> `,
})
class InputTestComponent {
  @Input() size: UiComponentSize = 'medium';
  @Input() status: UiComponentStatus = 'basic';
}

describe('Directive: UiInput', () => {
  let component: InputTestComponent;
  let fixture: ComponentFixture<InputTestComponent>;
  let inputDirective: InputDirective;
  let inputElement: Element;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTestComponent, InputDirective],
    });
    fixture = TestBed.createComponent(InputTestComponent);

    component = fixture.componentInstance;
    inputDirective = fixture.debugElement.query(
      By.directive(InputDirective)
    ).componentInstance;
    inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
  });

  it('should have a directive with default classes', () => {
    fixture.detectChanges();
    expect(inputDirective).toBeTruthy();
    expect(inputElement.classList).toContain('size-medium');
    expect(inputElement.classList).toContain('status-basic');
  });

  it('should set size', function () {
    component.size = 'large';
    fixture.detectChanges();
    expect(inputElement.classList).toContain('size-large');
  });

  it('should set status', function () {
    component.status = 'danger';
    fixture.detectChanges();
    expect(inputElement.classList).toContain('status-danger');
  });
});
