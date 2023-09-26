import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthPort } from '@domain/auth/ports/auth.port';
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
import { authInterceptorProviders } from '@infrastructure/common/auth.interceptor';
import { jwtInterceptorProviders } from '@infrastructure/common/jwt.interceptor';
import { userFeature } from '@presentation/store/user/reducers';

const loginUseCaseFactory = (authPort: AuthPort) => new LoginUseCase(authPort);

const profileUserCaseFactory = (authPort: AuthPort) =>
  new ProfileUseCase(authPort);

@NgModule({
  declarations: [LoginComponent],
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
      provide: AuthPort,
      useClass: HttpAuthAdapter,
    },
    {
      provide: TokenPort,
      useClass: TokenAdapter,
    },
    {
      provide: LoginUseCase,
      useFactory: loginUseCaseFactory,
      deps: [AuthPort],
    },
    {
      provide: ProfileUseCase,
      useFactory: profileUserCaseFactory,
      deps: [AuthPort],
    },
  ],
})
export class AuthModule {}
