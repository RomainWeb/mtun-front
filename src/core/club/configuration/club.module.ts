import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { clubFeature } from '../presentation/store/reducer';
import { ClubRoutingModule } from './club-routing.module';
import { ClubListComponent } from '../presentation/components/club-list/club-list.component';
import { ClubRepository } from '@club/domain/repositories/club.repository';
import { InMemoryClubImpl } from '@club/adapters/secondaries/inMemoryClubImpl';
import { ClubHandler } from '@club/useCases/club.handler';

const clubHandlerFactory = (clubRepository: ClubRepository) =>
  new ClubHandler(clubRepository);

const clubHandlerProvider = {
  provide: ClubHandler,
  useFactory: clubHandlerFactory,
  deps: [ClubRepository],
};

@NgModule({
  declarations: [ClubListComponent],
  providers: [
    clubHandlerProvider,
    { provide: ClubRepository, useClass: InMemoryClubImpl },
  ],
  imports: [
    CommonModule,
    ClubRoutingModule,
    StoreModule.forFeature('club', clubFeature),
  ],
  exports: [ClubListComponent],
})
export class ClubModule {}
