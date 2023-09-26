import { Component, OnInit } from '@angular/core';
import { AppState, getUserProfile } from '@presentation/store/user/selectors';
import { Store } from '@ngrx/store';
import { UserEntity } from '@domain/user/entities/user.entity';
import { fetchProfile } from '@presentation/store/user/actions';

@Component({
  selector: 'mtun-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(getUserProfile)
      .subscribe((userProfile: UserEntity | null) => {
        if (localStorage.getItem('auth-token') && !userProfile) {
          this.store.dispatch(fetchProfile());
        }
      });
  }
}
