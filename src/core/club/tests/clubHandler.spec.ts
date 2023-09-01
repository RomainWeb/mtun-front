import { ClubHandler } from '../useCases/club.handler';
import { ClubRepository } from '../domain/repositories/club.repository';
import { InMemoryClubImpl } from '../adapters/secondaries/inMemoryClubImpl';
import { ClubEntity } from '../domain/entities/club.entity';
import { ClubBuilderStub } from './stubs/clubBuilder.stub';

describe('Club UseCase fetch', () => {
  let clubOne: ClubEntity;

  beforeEach(() => {
    clubOne = new ClubBuilderStub().withName('clubOne').build();
  });

  describe('list of club', () => {
    it('should return a club list with zero element when source is empty', () => {
      const clubHandler = createClubEntity([]);

      clubHandler.getAll().subscribe((clubs) => {
        expect(clubs).toEqual([]);
      });
    });

    it('should return a club list with one element when source return one element', () => {
      const clubHandler = createClubEntity([clubOne]);

      clubHandler.getAll().subscribe((clubs) => {
        expect(clubs).toEqual([]);
      });
    });

    it('should return a club list with two elements when source return two elements', () => {
      const clubTwo: ClubEntity = new ClubBuilderStub()
        .withName('clubTwo')
        .build();
      const clubHandler = createClubEntity([clubOne, clubTwo]);

      clubHandler.getAll().subscribe((clubs) => {
        expect(clubs).toEqual([]);
      });
    });
  });

  it('should return a detail of one club', () => {
    const clubDetail: ClubEntity = new ClubBuilderStub()
      .withId(1)
      .withName('clubTwo')
      .withLogoUrl('logoPath')
      .build();
    const clubHandler = createClubEntity([clubDetail]);

    clubHandler.getById(2).subscribe((club) => {
      expect(club.id).toEqual(clubDetail.id);
      expect(club.name).toEqual(clubDetail.name);
      expect(club.logoUrl).toEqual(clubDetail.logoUrl);
    });
  });

  function createClubEntity(ClubList: ClubEntity[]) {
    const clubRepository: ClubRepository = new InMemoryClubImpl();
    return new ClubHandler(clubRepository);
  }
});
