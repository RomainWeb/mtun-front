import { LoginRequestDto } from '@infrastructure/data/auth/dtos/LoginRequest.dto';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '@infrastructure/data/auth/dtos/LoginResponse.dto';
import { UseCase } from '@core/utils/use-case';
import { LoginPort } from '@domain/auth/ports/login.port';

export class LoginUseCase
  implements UseCase<LoginRequestDto, LoginResponseDto>
{
  constructor(private readonly loginPort: LoginPort) {}

  execute(data: LoginRequestDto): Observable<LoginResponseDto> {
    return this.loginPort.login(data);
  }
}
