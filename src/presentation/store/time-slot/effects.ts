import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from './actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { ClubEntity } from '@domain/club/entities/club.entity';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';
import { GetAllTimeSlotsByUserIdUseCase } from '@domain/time-slot/useCases/getAllTimeSlotsByUserId.useCase';

@Injectable()
export class TimeSlotEffects {
  fetchClubs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.fetchTimeSlots),
      exhaustMap((action) =>
        this.getAllTimeSlotsByUserIdUseCase.execute(action.userId).pipe(
          map((timeSlots: TimeSlotEntity[]) =>
            fromActions.fetchTimeSlotsSuccess({ timeSlots })
          ),
          catchError((errors) =>
            of(fromActions.fetchTimeSlotsFailed({ errors }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private getAllTimeSlotsByUserIdUseCase: GetAllTimeSlotsByUserIdUseCase
  ) {}
}
