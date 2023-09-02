import { ClubEntity } from '../domain/entities/club.entity';
import { ClubRepository } from '../domain/repositories/club.repository';
import { InMemoryClubAdapter } from '../data/adapters/inMemoryClub.adapter';
import { GetClubDetailsUseCase } from '../useCases/getClubDetails.useCase';
import { ClubBuilder } from '@club/useCases/club.builder';

describe('get club details use case', () => {
  let getClubDetailsUseCase: GetClubDetailsUseCase;

  beforeEach(() => {
    const clubRepository: ClubRepository = new InMemoryClubAdapter();
    getClubDetailsUseCase = new GetClubDetailsUseCase(clubRepository);
  });

  it('should return a detail of one club', (done) => {
    const clubDetail: ClubEntity = new ClubBuilder()
      .withId(2)
      .withName('clubTwo')
      .withLogoUrl('logoPath')
      .build();

    getClubDetailsUseCase.execute(2).subscribe((club: ClubEntity) => {
      expect(club.id).toEqual(clubDetail.id);
      expect(club.name).toEqual(clubDetail.name);
      expect(club.logoUrl).toEqual(clubDetail.logoUrl);
      done();
    });
  });
});
