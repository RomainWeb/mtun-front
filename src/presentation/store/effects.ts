import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from './actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { GetAllClubsUseCase } from '../../core/domain/club/useCases/getAllClubs.useCase';
import { ClubEntity } from '../../core/domain/club/entities/club.entity';
import { GetClubDetailsUseCase } from '../../core/domain/club/useCases/getClubDetails.useCase';

@Injectable()
export class ClubEffects {
  fetchClubs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.fetchClubs),
      exhaustMap(() =>
        this.getAllClubsUseCase.execute().pipe(
          map((clubs: ClubEntity[]) =>
            fromActions.fetchClubsSuccess({ clubs: clubs })
          ),
          catchError((errors) => of(fromActions.fetchClubFailed({ errors })))
        )
      )
    )
  );

  fetchClubDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.fetchClubDetails),
      exhaustMap((action) =>
        this.getClubDetailsUseCase.execute(action.clubId).pipe(
          map((club: ClubEntity) =>
            fromActions.fetchClubDetailsSuccess({ club })
          ),
          catchError((errors) => of(fromActions.fetchClubFailed({ errors })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private getClubDetailsUseCase: GetClubDetailsUseCase,
    private getAllClubsUseCase: GetAllClubsUseCase
  ) {}
}
