import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from '@presentation/store/user/actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { UserEntity } from '@domain/user/entities/user.entity';
import { ProfileUseCase } from '@domain/auth/usecase/profile.useCase';

@Injectable()
export class UserEffects {
  fetchClubs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.fetchProfile),
      exhaustMap((action) =>
        this.profileUseCase.execute().pipe(
          map((userProfile: UserEntity) =>
            fromActions.fetchProfileSuccess({ userProfile })
          ),
          catchError((errors) => of(fromActions.fetchProfileFailed({ errors })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private profileUseCase: ProfileUseCase
  ) {}
}
