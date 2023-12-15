import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@presentation/store/user/selectors';
import { LoginUseCase } from '@domain/auth/usecase/login.useCase';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';
import { RegisterRequestDto } from '@infrastructure/data/auth/dtos/registerRequest.dto';
import { RegisterUseCase } from '@domain/auth/usecase/register.useCase';

@Component({
  selector: 'mtun-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerFormGroup: FormGroup;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  firstnameCtrl: FormControl;
  lastnameCtrl: FormControl;
  phoneNumberCtrl: FormControl;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly registerUseCase: RegisterUseCase
  ) {
    this.emailCtrl = new FormControl<string>('', [Validators.required]);
    this.passwordCtrl = new FormControl<string>('', [Validators.required]);
    this.firstnameCtrl = new FormControl<string>('', [Validators.required]);
    this.lastnameCtrl = new FormControl<string>('', [Validators.required]);
    this.phoneNumberCtrl = new FormControl<string>('', [Validators.required]);

    this.registerFormGroup = this.formBuilder.group({
      email: this.emailCtrl,
      password: this.passwordCtrl,
      lastname: this.lastnameCtrl,
      firstname: this.firstnameCtrl,
      phoneNumber: this.phoneNumberCtrl,
    });
  }

  register(): void {
    if (this.registerFormGroup.invalid) {
      return;
    } else {
      const registerRequest: RegisterRequestDto = {
        email: this.emailCtrl.value,
        password: this.passwordCtrl.value,
        firstname: this.firstnameCtrl.value,
        lastname: this.lastnameCtrl.value,
        phone_number: this.phoneNumberCtrl.value,
      };
    }
  }
}
