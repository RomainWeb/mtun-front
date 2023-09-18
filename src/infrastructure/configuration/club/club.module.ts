import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { clubFeature } from '../../../presentation/store/reducer';
import { ClubRoutingModule } from './club-routing.module';
import { ClubListComponent } from '../../../presentation/components/club-list/club-list.component';
import { ClubPort } from '@domain/club/ports/club.port';
import { InMemoryClubAdapter } from '@infrastructure/data/club/adapters/inMemoryClub.adapter';
import { GetAllClubsUseCase } from '../../../core/domain/club/useCases/getAllClubs.useCase';
import { EffectsModule } from '@ngrx/effects';
import { ClubEffects } from '../../../presentation/store/effects';
import { GetClubDetailsUseCase } from '../../../core/domain/club/useCases/getClubDetails.useCase';
import { ClubDetailsComponent } from '../../../presentation/components/club-details/club-details.component';
import { HttpClientClubAdapter } from '@infrastructure/data/club/adapters/httpClientClub.adapter';
import { HttpClientModule } from '@angular/common/http';

const getAllClubsUseCaseFactory = (clubRepository: ClubPort) =>
  new GetAllClubsUseCase(clubRepository);

const getClubDetailsUseCaseFactory = (clubRepository: ClubPort) =>
  new GetClubDetailsUseCase(clubRepository);

@NgModule({
  declarations: [ClubListComponent, ClubDetailsComponent],
  providers: [
    { provide: ClubPort, useClass: HttpClientClubAdapter },
    {
      provide: GetAllClubsUseCase,
      useFactory: getAllClubsUseCaseFactory,
      deps: [ClubPort],
    },
    {
      provide: GetClubDetailsUseCase,
      useFactory: getClubDetailsUseCaseFactory,
      deps: [ClubPort],
    },
  ],
  imports: [
    CommonModule,
    ClubRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('club', clubFeature),
    EffectsModule.forFeature([ClubEffects]),
  ],
  exports: [ClubListComponent, ClubDetailsComponent],
})
export class ClubModule {}
