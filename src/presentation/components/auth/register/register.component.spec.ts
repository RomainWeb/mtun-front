import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';
import { Observable, of } from 'rxjs';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';
import { RegisterRequestDto } from '@infrastructure/data/auth/dtos/registerRequest.dto';
import { RegisterResponseDto } from '@infrastructure/data/auth/dtos/registerResponse.dto';
import { RegisterUseCase } from '@domain/auth/usecase/register.useCase';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

class registerUseCaseStub {
  execute(data: RegisterRequestDto): Observable<RegisterResponseDto> {
    return of({
      statusCode: 200,
      message: 'register successfully',
    });
  }
}

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [RegisterComponent],
      providers: [{ provide: RegisterUseCase, useValue: registerUseCaseStub }],
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
