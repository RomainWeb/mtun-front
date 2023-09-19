import { Component, OnInit } from '@angular/core';
import {
  AppState,
  getTimeSlotList,
} from '@presentation/store/time-slot/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TimeSlotEntity } from '@domain/time-slot/entities/timeSlot.entity';
import { fetchTimeSlots } from '@presentation/store/time-slot/actions';

@Component({
  selector: 'mtun-time-slot-list',
  templateUrl: './time-slot-list.component.html',
  styleUrls: ['./time-slot-list.component.scss'],
})
export class TimeSlotListComponent implements OnInit {
  timeSlots$!: Observable<TimeSlotEntity[]>;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(fetchTimeSlots({ userId: 2 }));
    this.timeSlots$ = this.store.select(getTimeSlotList);
  }
}
