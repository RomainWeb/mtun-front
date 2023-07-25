import {createAction, props} from "@ngrx/store";
import {ClubModel} from "../../domain/models/club.model";

export const fetchClubs = createAction(
  '[club] Fetch Club List'
)

export const fetchClubsSuccess = createAction(
  '[club] Fetch Club List Success',
  props<{ clubs: ClubModel[] }>()
)

export const fetchClubsFailed = createAction(
  '[club] Fetch Club List Failed',
  props<{ errors: any }>()
)
