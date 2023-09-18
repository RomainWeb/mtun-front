import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { GetAllTimeSlotsByUserIdUseCase } from '@domain/time-slot/useCases/getAllTimeSlotsByUserId.useCase';
import { InMemoryTimeSlotAdapter } from '@infrastructure/data/time-slot/adapters/inMemoryTimeSlot.adapter';
import { TIME_SLOT_MOCK_LIST } from '../mocks/timeSlotBuildList.mock';

describe('get all time slots by user id use case', () => {
  let timeSlotPort: TimeSlotPort;

  beforeEach(() => {
    timeSlotPort = new InMemoryTimeSlotAdapter();
  });

  it('should return an empty time slots if they no time slot', (done) => {
    const getAllTimeSlotsByUserIdUseCase = new GetAllTimeSlotsByUserIdUseCase(
      timeSlotPort
    );

    getAllTimeSlotsByUserIdUseCase.execute(2).subscribe((result) => {
      expect(result).toEqual(TIME_SLOT_MOCK_LIST);
      done();
    });
  });
});
