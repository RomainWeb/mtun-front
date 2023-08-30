import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { clubFeature } from './store/reducer';
import { ClubRepository } from '../domain/repositories/club.repository';
import { GetAllClubsUseCase } from '../domain/usecases/get-all-clubs.usecase';
import { ClubInMemoryImplRepository } from '../data/repositories/club-in-memory-impl.repository';
import { ClubRoutingModule } from './club-routing.module';
import { ClubListComponent } from './components/club-list/club-list.component';

const getClubsUseCaseFactory = (clubRepo: ClubRepository) =>
  new GetAllClubsUseCase(clubRepo);

export const fetchClubsUseCaseProvider = {
  provide: GetAllClubsUseCase,
  useFactory: getClubsUseCaseFactory,
  deps: [ClubRepository],
};

@NgModule({
  declarations: [ClubListComponent],
  providers: [
    fetchClubsUseCaseProvider,
    { provide: ClubRepository, useClass: ClubInMemoryImplRepository },
  ],
  imports: [
    CommonModule,
    ClubRoutingModule,
    StoreModule.forFeature('club', clubFeature),
  ],
})
export class ClubModule {}
