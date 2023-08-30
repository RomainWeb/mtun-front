import { createAction, props } from '@ngrx/store';
import { ClubModel } from '../../domain/models/club.model';

export const fetchClubs = createAction('[club] Fetch ClubModel List');

export const fetchClubsSuccess = createAction(
  '[club] Fetch ClubModel List Success',
  props<{ clubs: ClubModel[] }>()
);

export const fetchClubsFailed = createAction(
  '[club] Fetch ClubModel List Failed',
  props<{ errors: any }>()
);
