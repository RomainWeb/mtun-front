import { Observable } from 'rxjs';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';

export abstract class LoginPort {
  abstract login(data: LoginRequestDto): Observable<LoginResponseDto>;
}
