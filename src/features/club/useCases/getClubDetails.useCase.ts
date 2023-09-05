import { ClubRepository } from '@club/domain/repositories/club.repository';
import { Observable } from 'rxjs';
import { ClubEntity } from '@club/domain/entities/club.entity';

export class GetClubDetailsUseCase {
  constructor(private clubRepository: ClubRepository) {}

  execute(clubId: number): Observable<ClubEntity> {
    return this.clubRepository.getById(clubId);
  }
}
