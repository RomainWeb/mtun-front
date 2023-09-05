import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClubEntity } from '@club/domain/entities/club.entity';
import { AppState, getClubDetails } from '@club/presentation/store/selectors';
import { Store } from '@ngrx/store';
import { fetchClubDetails, fetchClubs } from '@club/presentation/store/actions';

@Component({
  selector: 'mtun-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.scss'],
})
export class ClubDetailsComponent implements OnInit {
  clubDetails$: Observable<ClubEntity | null>;

  constructor(private readonly store: Store<AppState>) {
    this.clubDetails$ = store.select(getClubDetails);
  }

  ngOnInit() {
    this.store.dispatch(fetchClubDetails({ clubId: 3 }));
  }
}
