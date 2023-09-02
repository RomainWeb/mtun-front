import { createFeature, createReducer, on } from '@ngrx/store';
import * as fromActions from './actions';
import { ClubEntity } from '@club/domain/entities/club.entity';

export interface ClubState {
  clubs: ClubEntity[];
  clubDetails: ClubEntity | null;
  isLoading: boolean;
  isLoaded: boolean;
  errors: any;
}

const initialClubState: ClubState = {
  clubs: [],
  clubDetails: null,
  isLoading: false,
  isLoaded: false,
  errors: null,
};

export const clubFeature = createReducer(
  initialClubState,
  on(fromActions.fetchClubs, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
  })),
  on(fromActions.fetchClubsSuccess, (state, { clubs }) => ({
    ...state,
    clubs,
    isLoading: false,
    isLoaded: true,
  })),
  on(fromActions.fetchClubDetails, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
  })),
  on(fromActions.fetchClubDetailsSuccess, (state, { club }) => ({
    ...state,
    clubDetails: club,
    isLoading: false,
    isLoaded: true,
  })),
  on(fromActions.fetchClubFailed, (state, { errors }) => ({
    ...state,
    errors,
    isLoading: false,
    isLoaded: false,
  }))
);
