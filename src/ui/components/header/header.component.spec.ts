import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<mtun-header logo="logo.png">action content</mtun-header>`,
})
class HeaderTestComponent {}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let headerTestFixture: ComponentFixture<HeaderTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, HeaderTestComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    headerTestFixture = TestBed.createComponent(HeaderTestComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a logo input', function () {
    component.logo = 'logo.png';
    const logoImg: DebugElement = fixture.debugElement.query(By.css('img'));
    fixture.detectChanges();
    expect(logoImg.nativeElement.getAttribute('src')).toEqual('logo.png');
  });

  it('should have ng content for actions', function () {
    const content = headerTestFixture.debugElement.query(
      By.css('.action-content')
    );
    expect(content.nativeElement.textContent).toEqual('action content');
  });
});
