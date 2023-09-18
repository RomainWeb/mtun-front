import { ClubPort } from '@domain/club/ports/club.port';
import { map, Observable, of, Subject } from 'rxjs';
import { ClubEntity } from '@domain/club/entities/club.entity';
import { CLUB_LIST_MOCK } from '../../../../tests/mocks/clubBuildList.mock';
import { ClubBuilder } from '@domain/club/builders/club.builder';

export class InMemoryClubAdapter implements ClubPort {
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
