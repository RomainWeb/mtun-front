import { TimeSlotBuilder } from '@domain/time-slot/buidlers/timeSlot.buidler';
import { TimeSlotStatusEnum } from '@enums/timeSlotsStatus.enum';

export class TimeSlotEntity {
  private id: number;
  private startDate: Date;
  private endDate: Date;
  private description: string;
  private status: TimeSlotStatusEnum;

  constructor(builder: TimeSlotBuilder) {
    this.id = builder.id;
    this.startDate = builder.startDate;
    this.endDate = builder.endDate;
    this.description = builder.description;
    this.status = builder.status;
  }
}
