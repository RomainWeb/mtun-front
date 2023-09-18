import { Observable, of } from 'rxjs';
import { ClubPort } from '@domain/club/ports/club.port';
import { ClubEntity } from '../entities/club.entity';

export class GetAllClubsUseCase {
  constructor(private clubRepository: ClubPort) {}

  execute(): Observable<ClubEntity[]> {
    return this.clubRepository.getAll();
  }
}
