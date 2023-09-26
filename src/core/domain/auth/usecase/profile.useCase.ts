import { AuthPort } from '@domain/auth/ports/auth.port';
import { UseCase } from '@core/utils/use-case';
import { Observable } from 'rxjs';
import { ProfileRequestDto } from '@infrastructure/data/auth/dtos/profileRequest.dto';
import { ProfileResponseDto } from '@infrastructure/data/auth/dtos/profileResponse.dto';

export class ProfileUseCase
  implements UseCase<ProfileRequestDto, ProfileResponseDto>
{
  constructor(private authPort: AuthPort) {}

  execute(): Observable<ProfileResponseDto> {
    return this.authPort.profile();
  }
}
