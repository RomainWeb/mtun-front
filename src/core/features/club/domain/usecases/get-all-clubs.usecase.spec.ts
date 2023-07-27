import { GetAllClubsUseCase } from './get-all-clubs.usecase';
import { Observable, of } from 'rxjs';
import { ClubModel } from '../models/club.model';
import { CLUBS_MOCK } from '../../data/mocks/CLUBS_MOCK';
import { ClubRepository } from '../repositories/club.repository';

describe('GetAllClubsUseCase', () => {
  let useCase: GetAllClubsUseCase;
  let mockClubRepository: ClubRepository;

  beforeEach(() => {
    mockClubRepository = {
      getAllClubs: jest.fn().mockReturnValue(of(CLUBS_MOCK)),
    };

    useCase = new GetAllClubsUseCase(mockClubRepository);
  });

  it('should call getAllClubs from ClubRepository', () => {
    useCase.execute();

    expect(mockClubRepository.getAllClubs).toHaveBeenCalledTimes(1);
  });

  it('should return an Observable of ClubModel[]', (done) => {
    const result: Observable<ClubModel[]> = useCase.execute();

    expect(result).toBeInstanceOf(Observable);
    result.subscribe((res) => {
      expect(res).toEqual(CLUBS_MOCK);
      done();
    });
  });
});
