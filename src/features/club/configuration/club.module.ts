import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { clubFeature } from '../presentation/store/reducer';
import { ClubRoutingModule } from './club-routing.module';
import { ClubListComponent } from '../presentation/components/club-list/club-list.component';
import { ClubRepository } from '@club/domain/repositories/club.repository';
import { InMemoryClubAdapter } from '@club/data/adapters/inMemoryClub.adapter';
import { GetAllClubsUseCase } from '@club/useCases/getAllClubs.useCase';
import { EffectsModule } from '@ngrx/effects';
import { ClubEffects } from '@club/presentation/store/effects';
import { GetClubDetailsUseCase } from '@club/useCases/getClubDetails.useCase';
import { ClubDetailsComponent } from '@club/presentation/components/club-details/club-details.component';

const getAllClubsUseCaseFactory = (clubRepository: ClubRepository) =>
  new GetAllClubsUseCase(clubRepository);

const getClubDetailsUseCaseFactory = (clubRepository: ClubRepository) =>
  new GetClubDetailsUseCase(clubRepository);

@NgModule({
  declarations: [ClubListComponent, ClubDetailsComponent],
  providers: [
    { provide: ClubRepository, useClass: InMemoryClubAdapter },
    {
      provide: GetAllClubsUseCase,
      useFactory: getAllClubsUseCaseFactory,
      deps: [ClubRepository],
    },
    {
      provide: GetClubDetailsUseCase,
      useFactory: getClubDetailsUseCaseFactory,
      deps: [ClubRepository],
    },
  ],
  imports: [
    CommonModule,
    ClubRoutingModule,
    StoreModule.forFeature('club', clubFeature),
    EffectsModule.forFeature([ClubEffects]),
  ],
  exports: [ClubListComponent, ClubDetailsComponent],
})
export class ClubModule {}
