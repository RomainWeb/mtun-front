import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';
import { Observable, of } from 'rxjs';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';
import { LoginUseCase } from '@domain/auth/usecase/login.useCase';
import {
  NbButtonModule,
  NbInputModule,
  NbLayoutModule,
  NbThemeModule,
} from '@nebular/theme';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from '../../../../app/auth/auth-routing.module';
import { HttpClientModule } from '@angular/common/http';

class loginUseCaseStub {
  execute(data: LoginRequestDto): Observable<LoginResponseDto> {
    return of({
      statusCode: 200,
      refreshToken: 'refreshToken',
      message: 'login successfully',
      accessToken: 'accessToken',
    });
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NbThemeModule.forRoot({ name: 'mtun' }),
        NbLayoutModule,
        NbInputModule,
      ],
      providers: [{ provide: LoginUseCase, useValue: loginUseCaseStub }],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
