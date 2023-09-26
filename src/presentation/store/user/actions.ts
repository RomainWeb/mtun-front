import { createAction, props } from '@ngrx/store';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';
import { UserEntity } from '@domain/user/entities/user.entity';

export const fetchProfile = createAction('[User] fetch profile');

export const fetchProfileSuccess = createAction(
  '[User] Fetch profile Success',
  props<{ userProfile: UserEntity }>()
);

export const fetchProfileFailed = createAction(
  '[User] Fetch profile Failed',
  props<{ errors: any }>()
);
