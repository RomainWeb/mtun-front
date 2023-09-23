import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeSlotListComponent } from '@presentation/components/time-slot/time-slot-list/time-slot-list.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TimeSlotListComponent, canActivate: [authGuard] },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class TimeSlotRoutingModule {}
