import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginUseCase } from '@domain/auth/usecase/login.useCase';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';
import { NbComponentOrCustomStatus } from '@nebular/theme';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@presentation/store/user/selectors';
import { fetchProfile } from '@presentation/store/user/actions';

@Component({
  selector: 'mtun-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginFormGroup: FormGroup;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly store: Store<AppState>,
    private readonly loginUseCase: LoginUseCase
  ) {
    this.emailCtrl = new FormControl<string>('', [Validators.required]);
    this.passwordCtrl = new FormControl<string>('', [Validators.required]);

    this.loginFormGroup = this.formBuilder.group({
      email: this.emailCtrl,
      password: this.passwordCtrl,
    });
  }

  login(): void {
    console.log('login');
    if (this.loginFormGroup.invalid) {
      return;
    } else {
      const loginRequest: LoginRequestDto = {
        email: this.emailCtrl.value,
        password: this.passwordCtrl.value,
      };
      this.loginUseCase
        .execute(loginRequest)
        .subscribe((result: LoginResponseDto) => {
          localStorage.setItem('auth-token', <string>result.accessToken);
          localStorage.setItem(
            'auth-refresh-token',
            <string>result.refreshToken
          );
          this.router.navigate(['list']);
          this.store.dispatch(fetchProfile({ email: this.emailCtrl.value }));
        });
    }
  }

  get getEmailStatus(): NbComponentOrCustomStatus {
    return this.emailCtrl.invalid &&
      (this.emailCtrl.dirty || this.emailCtrl.touched)
      ? 'danger'
      : 'basic';
  }

  get getRequiredEmailError(): boolean {
    return (
      this.emailCtrl.getError('required') &&
      (this.emailCtrl.dirty || this.emailCtrl.touched)
    );
  }

  get getPasswordStatus(): NbComponentOrCustomStatus {
    return this.passwordCtrl.invalid &&
      (this.passwordCtrl.dirty || this.passwordCtrl.touched)
      ? 'danger'
      : 'basic';
  }

  get getRequiredPasswordError(): boolean {
    return (
      this.passwordCtrl.invalid &&
      (this.passwordCtrl.dirty || this.passwordCtrl.touched)
    );
  }
}
