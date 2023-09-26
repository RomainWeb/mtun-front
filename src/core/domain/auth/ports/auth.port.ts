import { Observable } from 'rxjs';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';
import { ProfileRequestDto } from '@infrastructure/data/auth/dtos/profileRequest.dto';
import { ProfileResponseDto } from '@infrastructure/data/auth/dtos/profileResponse.dto';

export abstract class AuthPort {
  abstract login(data: LoginRequestDto): Observable<LoginResponseDto>;
  abstract profile(data: ProfileRequestDto): Observable<ProfileResponseDto>;
  abstract refreshToken(token: string): Observable<string>;
}
