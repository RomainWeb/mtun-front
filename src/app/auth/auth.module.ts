import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginUseCase } from '@domain/auth/usecase/login.useCase';
import { HttpAuthAdapter } from '@infrastructure/data/auth/adapters/httpAuth.adapter';
import { LoginComponent } from '@presentation/components/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbInputModule } from '@nebular/theme';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '@presentation/store/user/effects';
import { ProfileUseCase } from '@domain/auth/usecase/profile.useCase';
import { TokenPort } from '@domain/auth/ports/token.port';
import { TokenAdapter } from '@infrastructure/persistence/token/token.adapter';
import { jwtInterceptorProviders } from '@infrastructure/common/jwt.interceptor';
import { userFeature } from '@presentation/store/user/reducers';
import { RegisterComponent } from '@presentation/components/auth/register/register.component';
import { LoginPort } from '@domain/auth/ports/login.port';
import { ProfilePort } from '@domain/auth/ports/profile.port';
import { RegisterPort } from '@domain/auth/ports/register.port';
import { RegisterUseCase } from '@domain/auth/usecase/register.useCase';

const loginUseCaseFactory = (loginPort: LoginPort) =>
  new LoginUseCase(loginPort);

const profileUserCaseFactory = (profilePort: ProfilePort) =>
  new ProfileUseCase(profilePort);

const registerUseCaseFactory = (registerPort: RegisterPort) =>
  new RegisterUseCase(registerPort);

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
    StoreModule.forFeature('user', userFeature),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [
    jwtInterceptorProviders,
    {
      provide: LoginPort,
      useClass: HttpAuthAdapter,
    },
    {
      provide: RegisterPort,
      useClass: HttpAuthAdapter,
    },
    {
      provide: ProfilePort,
      useClass: HttpAuthAdapter,
    },
    {
      provide: TokenPort,
      useClass: TokenAdapter,
    },
    {
      provide: LoginUseCase,
      useFactory: loginUseCaseFactory,
      deps: [LoginPort],
    },
    {
      provide: ProfileUseCase,
      useFactory: profileUserCaseFactory,
      deps: [ProfilePort],
    },
    {
      provide: RegisterUseCase,
      useFactory: registerUseCaseFactory,
      deps: [RegisterPort],
    },
  ],
})
export class AuthModule {}
