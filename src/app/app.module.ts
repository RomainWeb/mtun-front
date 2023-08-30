import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ClubModule } from '../core/club/presentation/club.module';
import { ClubEffects } from '../core/club/presentation/store/effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    UiModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([ClubEffects]),
    ClubModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
