import { NgModule, isDevMode, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiModule } from '../ui/ui.module';
import { DateTimeRepository } from '@infrastructure/datetime/repositories/dateTime.repository';
import { DateFnsAdapter } from '@infrastructure/datetime/adapters/dateFns.adapter';
import {
  NbButtonModule,
  NbLayoutModule,
  NbSidebarModule,
  NbThemeModule,
} from '@nebular/theme';
import { TimeSlotModule } from './time-slot/time-slot.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResponseInterceptor } from '@infrastructure/common/response.interceptor';
import { AuthModule } from './auth/auth.module';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NbThemeModule.forRoot({ name: 'mtun' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    UiModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    TimeSlotModule,
    AuthModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
    { provide: DateTimeRepository, useClass: DateFnsAdapter },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
