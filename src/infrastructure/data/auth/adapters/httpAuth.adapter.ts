import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { ProfileResponseDto } from '@infrastructure/data/auth/dtos/profileResponse.dto';
import { LoginPort } from '@domain/auth/ports/login.port';
import { RegisterPort } from '@domain/auth/ports/register.port';
import { ProfilePort } from '@domain/auth/ports/profile.port';
import { data } from 'autoprefixer';
import { RegisterRequestDto } from '@infrastructure/data/auth/dtos/registerRequest.dto';
import { RegisterResponseDto } from '@infrastructure/data/auth/dtos/registerResponse.dto';

@Injectable()
export class HttpAuthAdapter implements LoginPort, RegisterPort, ProfilePort {
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

  register(data: RegisterRequestDto): Observable<RegisterResponseDto> {
    return this.http.post<RegisterResponseDto>(
      environment.apiUrl + 'auth/register',
      data
    );
  }
}
