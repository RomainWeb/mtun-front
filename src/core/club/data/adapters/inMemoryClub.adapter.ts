import { ClubRepository } from '../../domain/repositories/club.repository';
import { map, Observable, of, Subject } from 'rxjs';
import { ClubEntity } from '../../domain/entities/club.entity';
import { CLUB_LIST_MOCK } from '@club/tests/mocks/clubBuildList.mock';
import { ClubBuilder } from '@club/useCases/club.builder';

export class InMemoryClubAdapter implements ClubRepository {
  clubList: ClubEntity[] = CLUB_LIST_MOCK;

  constructor() {}

  getAll(): Observable<ClubEntity[]> {
    return of(this.clubList);
  }

  getById(clubId: number): Observable<ClubEntity> {
    const club = this.clubList.find((club: ClubEntity) => club.id === clubId);

    if (!club) {
      return of(new ClubBuilder().build());
    }

    return of(club);
  }
}
