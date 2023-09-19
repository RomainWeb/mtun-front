import { TimeSlotState } from './reducer';
import { createSelector } from '@ngrx/store';

export interface AppState {
  timeSlot: TimeSlotState;
}

export const selectFeature = (state: AppState) => state.timeSlot;

export const getTimeSlotList = createSelector(
  selectFeature,
  (state: TimeSlotState) => state.timeSlots
);
