import { createFeature, createReducer, on } from '@ngrx/store';
import * as fromActions from './actions';
import { UserEntity } from '@domain/user/entities/user.entity';

export interface UserState {
  userProfile: UserEntity | null;
  isLoading: boolean;
  isLoaded: boolean;
  errors: any;
}

const initialUserState: UserState = {
  userProfile: null,
  isLoading: false,
  isLoaded: false,
  errors: null,
};

export const userFeature = createReducer(
  initialUserState,
  on(fromActions.fetchProfile, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
  })),
  on(fromActions.fetchProfileSuccess, (state, { userProfile }) => ({
    ...state,
    userProfile,
    isLoading: false,
    isLoaded: true,
  })),
  on(fromActions.fetchProfileFailed, (state, { errors }) => ({
    ...state,
    errors,
    isLoading: false,
    isLoaded: false,
  }))
);
