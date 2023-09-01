import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from './actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { ClubHandler } from '@club/useCases/club.handler';
import { ClubEntity } from '@club/domain/entities/club.entity';

@Injectable()
export class ClubEffects {
  fetchClubs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.fetchClubs),
      exhaustMap(() =>
        this.clubHandler.getAll().pipe(
          map((clubs: ClubEntity[]) =>
            fromActions.fetchClubsSuccess({ clubs: clubs })
          ),
          catchError((errors) => of(fromActions.fetchClubsFailed({ errors })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private clubHandler: ClubHandler) {}
}
