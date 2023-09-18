import { GetAllClubsUseCase } from '@domain/club/useCases/getAllClubs.useCase';
import { ClubPort } from '@domain/club/ports/club.port';
import { InMemoryClubAdapter } from '@infrastructure/data/club/adapters/inMemoryClub.adapter';
import { CLUB_LIST_MOCK } from '../mocks/clubBuildList.mock';

describe('Club UseCase fetch', () => {
  let getAllClubsUseCase: GetAllClubsUseCase;

  beforeEach(() => {
    const clubRepository: ClubPort = new InMemoryClubAdapter();
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
