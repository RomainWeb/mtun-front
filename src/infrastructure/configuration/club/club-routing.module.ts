import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubListComponent } from '../../../presentation/components/club-list/club-list.component';
import { ClubDetailsComponent } from '../../../presentation/components/club-details/club-details.component';

const routes: Routes = [
  { path: 'list', component: ClubListComponent },
  { path: ':id', component: ClubDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubRoutingModule {}
