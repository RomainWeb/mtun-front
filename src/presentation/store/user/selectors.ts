import { createSelector } from '@ngrx/store';
import { UserState } from '@presentation/store/user/reducers';

export interface AppState {
  user: UserState;
}

export const selectFeature = (state: AppState) => state.user;

export const getUserProfile = createSelector(
  selectFeature,
  (state: UserState) => state.userProfile
);
