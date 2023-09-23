import { Observable } from 'rxjs';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';

export abstract class AuthPort {
  abstract login(data: LoginRequestDto): Observable<LoginResponseDto>;
}
