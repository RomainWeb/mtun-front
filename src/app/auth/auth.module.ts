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

const loginUseCaseFactory = (loginPort: AuthPort) =>
  new LoginUseCase(loginPort);

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
  ],
  providers: [
    {
      provide: AuthPort,
      useClass: HttpAuthAdapter,
    },
    {
      provide: LoginUseCase,
      useFactory: loginUseCaseFactory,
      deps: [AuthPort],
    },
  ],
})
export class AuthModule {}
