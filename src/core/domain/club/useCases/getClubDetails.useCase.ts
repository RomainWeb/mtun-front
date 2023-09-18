import { ClubPort } from '@domain/club/ports/club.port';
import { Observable } from 'rxjs';
import { ClubEntity } from '../entities/club.entity';

export class GetClubDetailsUseCase {
  constructor(private clubRepository: ClubPort) {}

  execute(clubId: number): Observable<ClubEntity> {
    return this.clubRepository.getById(clubId);
  }
}
