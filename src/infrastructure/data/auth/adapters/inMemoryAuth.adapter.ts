import { AuthPort } from '@domain/auth/ports/auth.port';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';
import { Observable, of } from 'rxjs';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';
import { ProfileRequestDto } from '@infrastructure/data/auth/dtos/profileRequest.dto';
import { ProfileResponseDto } from '@infrastructure/data/auth/dtos/profileResponse.dto';

export class InMemoryAuthAdapter implements AuthPort {
  _loginResponse: LoginResponseDto;

  constructor(private loginResponse: LoginResponseDto) {
    this._loginResponse = loginResponse;
  }

  login(data: LoginRequestDto): Observable<LoginResponseDto> {
    return of(this._loginResponse);
  }

  profile(): Observable<ProfileResponseDto> {
    return of({
      name: 'Yann name',
      email: 'yann@gmail.com',
      display_name: 'yann pseudo',
      id: '8e3399e6-1d94-11ec-9621-0242ac130002',
    });
  }

  refreshToken(token: string): Observable<string> {
    return of('token');
  }
}
