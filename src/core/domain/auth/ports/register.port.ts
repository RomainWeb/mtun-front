import { Observable } from 'rxjs';
import { RegisterRequestDto } from '@infrastructure/data/auth/dtos/registerRequest.dto';
import { RegisterResponseDto } from '@infrastructure/data/auth/dtos/registerResponse.dto';

export abstract class RegisterPort {
  abstract register(data: RegisterRequestDto): Observable<RegisterResponseDto>;
}
