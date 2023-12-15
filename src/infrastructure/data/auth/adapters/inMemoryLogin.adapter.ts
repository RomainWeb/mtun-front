import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';
import { Observable, of } from 'rxjs';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';
import { LoginPort } from '@domain/auth/ports/login.port';

export class InMemoryLoginAdapter implements LoginPort {
  _loginResponse: LoginResponseDto;

  constructor(private loginResponse: LoginResponseDto) {
    this._loginResponse = loginResponse;
  }

  login(data: LoginRequestDto): Observable<LoginResponseDto> {
    return of(this._loginResponse);
  }
}
