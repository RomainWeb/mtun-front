import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSlotListComponent } from '@presentation/components/time-slot/time-slot-list/time-slot-list.component';
import { TimeSlotRoutingModule } from './time-slot-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { TimeSlotEffects } from '@presentation/store/time-slot/effects';
import { StoreModule } from '@ngrx/store';
import { timeSlotFeature } from '@presentation/store/time-slot/reducer';
import { TimeSlotPort } from '@domain/time-slot/ports/timeSlot.port';
import { GetAllTimeSlotsByUserIdUseCase } from '@domain/time-slot/useCases/getAllTimeSlotsByUserId.useCase';
import { InMemoryTimeSlotAdapter } from '@infrastructure/data/time-slot/adapters/inMemoryTimeSlot.adapter';
import { TIME_SLOT_MOCK_LIST } from '../../tests/mocks/timeSlotBuildList.mock';

const getAllTimeSlotsByUserIdUseCaseFactory = (timeSlotPort: TimeSlotPort) =>
  new GetAllTimeSlotsByUserIdUseCase(timeSlotPort);

@NgModule({
  declarations: [TimeSlotListComponent],
  imports: [
    CommonModule,
    TimeSlotRoutingModule,
    StoreModule.forFeature('timeSlot', timeSlotFeature),
    EffectsModule.forFeature([TimeSlotEffects]),
  ],
  providers: [
    {
      provide: TimeSlotPort,
      useFactory: () => new InMemoryTimeSlotAdapter(TIME_SLOT_MOCK_LIST),
    },
    {
      provide: GetAllTimeSlotsByUserIdUseCase,
      useFactory: getAllTimeSlotsByUserIdUseCaseFactory,
      deps: [TimeSlotPort],
    },
  ],
})
export class TimeSlotModule {}
