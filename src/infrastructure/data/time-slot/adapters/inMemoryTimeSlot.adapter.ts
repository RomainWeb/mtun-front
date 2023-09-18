import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { Observable, of } from 'rxjs';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';
import { TIME_SLOT_MOCK_LIST } from '../../../../tests/mocks/timeSlotBuildList.mock';

export class InMemoryTimeSlotAdapter implements TimeSlotPort {
  getAllTimeSlotsByUserId(): Observable<TimeSlotEntity[]> {
    return of(TIME_SLOT_MOCK_LIST);
  }
}
