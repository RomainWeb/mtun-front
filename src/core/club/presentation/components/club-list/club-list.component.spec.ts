import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubListComponent } from './club-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ClubState } from '@club/presentation/store/reducer';

describe('ClubListComponent', () => {
  let component: ClubListComponent;
  let fixture: ComponentFixture<ClubListComponent>;
  let store: MockStore<ClubState>;

  const initialState: ClubState = {
    clubs: [],
    isLoading: false,
    isLoaded: false,
    errors: null,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubListComponent],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(ClubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
