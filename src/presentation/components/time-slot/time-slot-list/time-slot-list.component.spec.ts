import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSlotListComponent } from './time-slot-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TimeSlotState } from '@presentation/store/time-slot/reducer';

describe('TimeSlotListComponent', () => {
  let component: TimeSlotListComponent;
  let fixture: ComponentFixture<TimeSlotListComponent>;
  let store: MockStore<TimeSlotState>;

  const initialState: TimeSlotState = {
    timeSlots: [],
    isLoading: false,
    isLoaded: false,
    errors: null,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeSlotListComponent],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(TimeSlotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
