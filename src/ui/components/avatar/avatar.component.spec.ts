import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarComponent } from './avatar.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarComponent],
    });
    fixture = TestBed.createComponent(AvatarComponent);
    debugElement = fixture.debugElement.query(By.css('img'));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a "img" input', function () {
    component.img = 'img.png';
    fixture.detectChanges();
    expect(debugElement.nativeElement.getAttribute('src')).toEqual('img.png');
  });

  it('should have a "alt" input', function () {
    component.alt = 'alt img';
    fixture.detectChanges();
    expect(debugElement.nativeElement.getAttribute('alt')).toEqual('alt img');
  });
});
