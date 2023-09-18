import { TimeSlotStatusEnum } from '@enums/timeSlotsStatus.enum';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';

export class TimeSlotBuilder {
  private _id!: number;
  private _startDate!: Date;
  private _endDate!: Date;
  private _description!: string;
  private _status!: TimeSlotStatusEnum;

  withId(value: number): TimeSlotBuilder {
    this._id = value;
    return this;
  }

  withStartDate(value: Date): TimeSlotBuilder {
    this._startDate = value;
    return this;
  }

  withEndDate(value: Date): TimeSlotBuilder {
    this._endDate = value;
    return this;
  }

  withDescription(value: string): TimeSlotBuilder {
    this._description = value;
    return this;
  }

  withStatus(value: TimeSlotStatusEnum): TimeSlotBuilder {
    this._status = value;
    return this;
  }

  get id(): number {
    return this._id;
  }

  get startDate(): Date {
    return this._startDate;
  }

  get endDate(): Date {
    return this._endDate;
  }

  get description(): string {
    return this._description;
  }

  get status(): TimeSlotStatusEnum {
    return this._status;
  }

  build(): TimeSlotEntity {
    return new TimeSlotEntity(this);
  }
}
