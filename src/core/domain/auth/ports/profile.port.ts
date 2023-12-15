import { Observable } from 'rxjs';
import { ProfileResponseDto } from '@infrastructure/data/auth/dtos/profileResponse.dto';

export abstract class ProfilePort {
  abstract profile(): Observable<ProfileResponseDto>;
}
