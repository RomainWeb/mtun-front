import { createAction, props } from '@ngrx/store';
import { ClubEntity } from '@club/domain/entities/club.entity';

export const fetchClubs = createAction('[club] fetch club List');

export const fetchClubsSuccess = createAction(
  '[club] Fetch Club List Success',
  props<{ clubs: ClubEntity[] }>()
);

export const fetchClubDetails = createAction(
  '[club] fetch club details',
  props<{ clubId: number }>()
);
export const fetchClubDetailsSuccess = createAction(
  '[club] fetch club details success',
  props<{ club: ClubEntity }>()
);

export const fetchClubFailed = createAction(
  '[club] Fetch Club List Failed',
  props<{ errors: any }>()
);
