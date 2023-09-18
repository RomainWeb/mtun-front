import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { Observable } from 'rxjs';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';

export class GetAllTimeSlotsByUserIdUseCase {
  constructor(private readonly timeSlotPort: TimeSlotPort) {}

  execute(userId: number): Observable<TimeSlotEntity[]> {
    return this.timeSlotPort.getAllTimeSlotsByUserId();
  }
}
