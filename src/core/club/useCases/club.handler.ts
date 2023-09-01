import { Observable, of } from 'rxjs';
import { ClubRepository } from '../domain/repositories/club.repository';
import { ClubEntity } from '../domain/entities/club.entity';

export class ClubHandler implements ClubRepository {
  constructor(private clubRepository: ClubRepository) {}

  getAll(): Observable<any> {
    return this.clubRepository.getAll();
  }

  getById(id: number): Observable<ClubEntity> {
    return this.clubRepository.getById(id);
  }
}
