import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<mtun-button>click me</mtun-button>`,
})
class ButtonTestComponent {}

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let fixtureButtonTest: ComponentFixture<ButtonTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent, ButtonTestComponent],
    });
    fixture = TestBed.createComponent(ButtonComponent);
    fixtureButtonTest = TestBed.createComponent(ButtonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a ng-content', function () {
    const button: DebugElement = fixtureButtonTest.debugElement.query(
      By.css('button')
    );
    expect(button.nativeElement.textContent).toEqual('click me');
  });
});
