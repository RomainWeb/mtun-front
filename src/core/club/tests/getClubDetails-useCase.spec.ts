import { ClubEntity } from '../domain/entities/club.entity';
import { ClubRepository } from '../domain/repositories/club.repository';
import { InMemoryClubAdapter } from '../data/adapters/inMemoryClub.adapter';
import { GetClubDetailsUseCase } from '../useCases/getClubDetails.useCase';
import { ClubBuilder } from '@club/useCases/club.builder';
import { SportTypeEnum } from '@enums/sportType.enum';

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
      .withSportType(SportTypeEnum.Football)
      .withShortName('TCV')
      .withClubCreationDate(new Date(98))
      .withEmailContact('test.contact@test.com')
      .build();

    getClubDetailsUseCase.execute(2).subscribe((club: ClubEntity) => {
      expect(club.id).toEqual(clubDetail.id);
      expect(club.name).toEqual(clubDetail.name);
      expect(club.logoUrl).toEqual(clubDetail.logoUrl);
      expect(club.sportType).toEqual(clubDetail.sportType);
      expect(club.shortName).toEqual(clubDetail.shortName);
      expect(club.clubCreationDate).toEqual(clubDetail.clubCreationDate);
      expect(club.emailContact).toEqual(clubDetail.emailContact);
      expect(club.address).toEqual(clubDetail.address);
      done();
    });
  });
});
