import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState, getClubList} from "../core/features/club/presentation/store/selectors";
import {Observable} from "rxjs";
import {ClubModel} from "../core/features/club/domain/models/club.model";
import {fetchClubs} from "../core/features/club/presentation/store/actions";

@Component({
  selector: 'mtun-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  clubList$: Observable<ClubModel[]>;

  constructor(private store: Store<AppState>) {
    this.clubList$ = store.select(getClubList);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchClubs());
  }
}
