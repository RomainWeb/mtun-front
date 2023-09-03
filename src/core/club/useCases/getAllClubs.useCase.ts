import { Observable, of } from 'rxjs';
import { ClubRepository } from '../domain/repositories/club.repository';
import { ClubEntity } from '../domain/entities/club.entity';

export class GetAllClubsUseCase {
  constructor(private clubRepository: ClubRepository) {}

  execute(): Observable<ClubEntity[]> {
    return this.clubRepository.getAll();
  }
}
