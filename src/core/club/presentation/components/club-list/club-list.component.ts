import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClubEntity } from '@club/domain/entities/club.entity';
import { Store } from '@ngrx/store';
import { AppState, getClubList } from '@club/presentation/store/selectors';
import { fetchClubs } from '@club/presentation/store/actions';

@Component({
  selector: 'mtun-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.scss'],
})
export class ClubListComponent implements OnInit {
  clubList$: Observable<ClubEntity[]>;

  constructor(private readonly store: Store<AppState>) {
    this.clubList$ = store.select(getClubList);
  }

  ngOnInit() {
    this.store.dispatch(fetchClubs());
  }
}
