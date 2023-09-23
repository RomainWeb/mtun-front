import { AuthPort } from '@domain/auth/ports/auth.port';
import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';
import { UseCase } from '@core/utils/use-case';

export class LoginUseCase
  implements UseCase<LoginRequestDto, LoginResponseDto>
{
  constructor(private readonly loginPort: AuthPort) {}

  execute(data: LoginRequestDto): Observable<LoginResponseDto> {
    return this.loginPort.login(data);
  }
}
