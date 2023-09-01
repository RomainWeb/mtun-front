import { ClubRepository } from '../../domain/repositories/club.repository';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { ClubEntity } from '../../domain/entities/club.entity';
import { ClubBuilder } from '../../useCases/club.builder';

export class InMemoryClubImpl implements ClubRepository {
  getAll(): Observable<ClubEntity[]> {
    return of([
      new ClubBuilder()
        .withId(1)
        .withName('clubOne')
        .withLogoUrl('logoUrl1')
        .build(),
      new ClubBuilder()
        .withId(2)
        .withName('clubTwo')
        .withLogoUrl('logoUrl2')
        .build(),
      new ClubBuilder()
        .withId(3)
        .withName('clubThree')
        .withLogoUrl('logoUrl3')
        .build(),
    ]);
  }

  getById(id: number): Observable<ClubEntity> {
    return of(new ClubBuilder().withId(3).withName('clubThree').build());
  }
}
