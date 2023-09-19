import { createFeature, createReducer, on } from '@ngrx/store';
import * as fromActions from './actions';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';

export interface TimeSlotState {
  timeSlots: TimeSlotEntity[];
  isLoading: boolean;
  isLoaded: boolean;
  errors: any;
}

const initialTimeSlotState: TimeSlotState = {
  timeSlots: [],
  isLoading: false,
  isLoaded: false,
  errors: null,
};

export const timeSlotFeature = createReducer(
  initialTimeSlotState,
  on(fromActions.fetchTimeSlots, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
  })),
  on(fromActions.fetchTimeSlotsSuccess, (state, { timeSlots }) => ({
    ...state,
    timeSlots,
    isLoading: false,
    isLoaded: true,
  })),
  on(fromActions.fetchTimeSlotsFailed, (state, { errors }) => ({
    ...state,
    errors,
    isLoading: false,
    isLoaded: false,
  }))
);
