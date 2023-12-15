import { UseCase } from '@core/utils/use-case';
import { Observable } from 'rxjs';
import { ProfileRequestDto } from '@infrastructure/data/auth/dtos/profileRequest.dto';
import { ProfileResponseDto } from '@infrastructure/data/auth/dtos/profileResponse.dto';
import { ProfilePort } from '@domain/auth/ports/profile.port';

export class ProfileUseCase
  implements UseCase<ProfileRequestDto, ProfileResponseDto>
{
  constructor(private profilePort: ProfilePort) {}

  execute(): Observable<ProfileResponseDto> {
    return this.profilePort.profile();
  }
}
