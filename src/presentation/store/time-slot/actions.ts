import { createAction, props } from '@ngrx/store';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';

export const fetchTimeSlots = createAction(
  '[Time Slot] fetch time slots',
  props<{ userId: number }>()
);

export const fetchTimeSlotsSuccess = createAction(
  '[Time Slot] Fetch Time Slot Success',
  props<{ timeSlots: TimeSlotEntity[] }>()
);

export const fetchTimeSlotsFailed = createAction(
  '[Time Slot] Fetch Time Slot Failed',
  props<{ errors: any }>()
);
