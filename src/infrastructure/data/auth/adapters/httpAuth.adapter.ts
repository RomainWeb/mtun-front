import { AuthPort } from '@domain/auth/ports/auth.port';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { data } from 'autoprefixer';
import { ProfileRequestDto } from '@infrastructure/data/auth/dtos/profileRequest.dto';
import { ProfileResponseDto } from '@infrastructure/data/auth/dtos/profileResponse.dto';

@Injectable()
export class HttpAuthAdapter implements AuthPort {
  constructor(private readonly http: HttpClient) {}

  login(data: LoginRequestDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(
      environment.apiUrl + 'auth/login',
      data
    );
  }

  profile(): Observable<ProfileResponseDto> {
    return this.http.get<ProfileResponseDto>(
      environment.apiUrl + 'auth/profile'
    );
  }

  refreshToken(token: string): Observable<string> {
    return this.http.post<string>(environment.apiUrl + 'auth/refresh', {
      refreshToken: token,
    });
  }
}
