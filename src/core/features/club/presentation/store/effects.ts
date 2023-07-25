import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as fromActions from './actions';
import {catchError, exhaustMap, map, of} from "rxjs";
import {GetAllClubsUseCase} from "../../domain/usecases/get-all-clubs.usecase";
import {ClubModel} from "../../domain/models/club.model";

@Injectable()
export class ClubEffects {

  fetchClubs$ = createEffect(() => this.actions$.pipe(
      ofType(fromActions.fetchClubs),
      exhaustMap(() => this.getAllClubsUseCase.execute()
        .pipe(
          map((clubs: ClubModel[]) => (fromActions.fetchClubsSuccess({ clubs: clubs }))),
          catchError(errors => of(fromActions.fetchClubsFailed({ errors }))
        ))
    )
  ));

  constructor(
    private actions$: Actions,
    private getAllClubsUseCase: GetAllClubsUseCase
  ) {}
}
