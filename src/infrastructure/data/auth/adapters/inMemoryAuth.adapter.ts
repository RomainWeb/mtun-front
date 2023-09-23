import { AuthPort } from '@domain/auth/ports/auth.port';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';
import { Observable, of } from 'rxjs';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';

export class InMemoryAuthAdapter implements AuthPort {
  _loginResponse: LoginResponseDto;

  constructor(private loginResponse: LoginResponseDto) {
    this._loginResponse = loginResponse;
  }

  login(data: LoginRequestDto): Observable<LoginResponseDto> {
    return of(this._loginResponse);
  }
}
