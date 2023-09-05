import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDetailsComponent } from './club-details.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ClubState } from '@club/presentation/store/reducer';

describe('ClubDetailsComponent', () => {
  let component: ClubDetailsComponent;
  let fixture: ComponentFixture<ClubDetailsComponent>;
  let store: MockStore<ClubState>;

  const initialState: ClubState = {
    clubs: [],
    clubDetails: null,
    isLoading: false,
    isLoaded: false,
    errors: null,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubDetailsComponent],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(ClubDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
