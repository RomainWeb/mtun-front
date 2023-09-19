import { TimeSlotBuilder } from '@domain/time-slot/buidlers/timeSlot.buidler';
import { TimeSlotStatusEnum } from '@enums/timeSlotsStatus.enum';

export class TimeSlotEntity {
  id: number;
  startDate: Date;
  endDate: Date;
  description: string;
  status: TimeSlotStatusEnum;

  constructor(builder: TimeSlotBuilder) {
    this.id = builder.id;
    this.startDate = builder.startDate;
    this.endDate = builder.endDate;
    this.description = builder.description;
    this.status = builder.status;
  }
}
