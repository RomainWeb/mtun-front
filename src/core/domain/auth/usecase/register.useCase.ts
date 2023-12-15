import { UseCase } from '@core/utils/use-case';
import { RegisterRequestDto } from '@infrastructure/data/auth/dtos/registerRequest.dto';
import { RegisterResponseDto } from '@infrastructure/data/auth/dtos/registerResponse.dto';
import { Observable } from 'rxjs';
import { RegisterPort } from '@domain/auth/ports/register.port';

export class RegisterUseCase
  implements UseCase<RegisterRequestDto, RegisterResponseDto>
{
  constructor(private readonly registerPort: RegisterPort) {}

  execute(data: RegisterRequestDto): Observable<RegisterResponseDto> {
    return this.registerPort.register(data);
  }
}
