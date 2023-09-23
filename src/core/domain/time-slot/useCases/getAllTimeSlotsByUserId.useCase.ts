import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { Observable } from 'rxjs';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';
import { UseCase } from '@core/utils/use-case';

export class GetAllTimeSlotsByUserIdUseCase
  implements UseCase<number, TimeSlotEntity[]>
{
  constructor(private readonly timeSlotPort: TimeSlotPort) {}

  execute(userId: number): Observable<TimeSlotEntity[]> {
    return this.timeSlotPort.getAllTimeSlotsByUserId();
  }
}
