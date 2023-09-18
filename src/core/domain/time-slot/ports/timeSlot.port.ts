import { Observable } from 'rxjs';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';

export abstract class TimeSlotPort {
  abstract getAllTimeSlotsByUserId(): Observable<TimeSlotEntity[]>;
}
