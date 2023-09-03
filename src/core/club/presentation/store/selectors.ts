import { ClubState } from './reducer';
import { createSelector } from '@ngrx/store';

export interface AppState {
  club: ClubState;
}

export const selectFeature = (state: AppState) => state.club;

export const getClubList = createSelector(
  selectFeature,
  (state: ClubState) => state.clubs
);

export const getClubDetails = createSelector(
  selectFeature,
  (state: ClubState) => state.clubDetails
);
