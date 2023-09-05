import { GetAllClubsUseCase } from '../useCases/getAllClubs.useCase';
import { ClubRepository } from '../domain/repositories/club.repository';
import { InMemoryClubAdapter } from '../data/adapters/inMemoryClub.adapter';
import { CLUB_LIST_MOCK } from '@club/tests/mocks/clubBuildList.mock';

describe('Club UseCase fetch', () => {
  let getAllClubsUseCase: GetAllClubsUseCase;

  beforeEach(() => {
    const clubRepository: ClubRepository = new InMemoryClubAdapter();
    getAllClubsUseCase = new GetAllClubsUseCase(clubRepository);
  });

  describe('list of club', () => {
    it('should return a club list with zero element when source is empty', (done) => {
      getAllClubsUseCase.execute().subscribe((clubs) => {
        expect(clubs).toEqual(CLUB_LIST_MOCK);
        expect(clubs.length).toEqual(3);
        done();
      });
    });
  });
});
