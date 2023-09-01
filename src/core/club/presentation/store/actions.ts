import { createAction, props } from '@ngrx/store';
import { ClubEntity } from '@club/domain/entities/club.entity';

export const fetchClubs = createAction('[club] Fetch ClubModel List');

export const fetchClubsSuccess = createAction(
  '[club] Fetch ClubModel List Success',
  props<{ clubs: ClubEntity[] }>()
);

export const fetchClubsFailed = createAction(
  '[club] Fetch ClubModel List Failed',
  props<{ errors: any }>()
);
