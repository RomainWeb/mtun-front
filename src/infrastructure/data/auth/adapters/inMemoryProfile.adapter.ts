import { Observable, of } from 'rxjs';
import { ProfileResponseDto } from '@infrastructure/data/auth/dtos/profileResponse.dto';
import { ProfilePort } from '@domain/auth/ports/profile.port';

export class InMemoryProfileAdapter implements ProfilePort {
  profile(): Observable<ProfileResponseDto> {
    return of({
      name: 'Yann name',
      email: 'yann@gmail.com',
      display_name: 'yann pseudo',
      id: '8e3399e6-1d94-11ec-9621-0242ac130002',
    });
  }
}
