import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';
import { TimeSlotBuilder } from '@domain/time-slot/buidlers/timeSlot.buidler';
import { TimeSlotStatusEnum } from '@enums/timeSlotsStatus.enum';

export const TIME_SLOT_MOCK_LIST: TimeSlotEntity[] = [
  new TimeSlotBuilder()
    .withId(1)
    .withStartDate(new Date(2023, 4, 4, 14, 0))
    .withEndDate(new Date(2023, 4, 4, 15, 30))
    .withDescription('test description 1')
    .withStatus(TimeSlotStatusEnum.NotStarted)
    .build(),
  new TimeSlotBuilder()
    .withId(2)
    .withStartDate(new Date(2023, 4, 4, 15, 30))
    .withEndDate(new Date(2023, 4, 4, 17, 0))
    .withDescription('test description 2')
    .withStatus(TimeSlotStatusEnum.NotStarted)
    .build(),
  new TimeSlotBuilder()
    .withId(3)
    .withStartDate(new Date(2023, 4, 4, 17, 0))
    .withEndDate(new Date(2023, 4, 4, 18, 30))
    .withDescription('test description 3')
    .withStatus(TimeSlotStatusEnum.NotStarted)
    .build(),
  new TimeSlotBuilder()
    .withId(4)
    .withStartDate(new Date(2023, 4, 4, 18, 30))
    .withEndDate(new Date(2023, 4, 4, 20, 0))
    .withDescription('test description 4')
    .withStatus(TimeSlotStatusEnum.NotStarted)
    .build(),
];
