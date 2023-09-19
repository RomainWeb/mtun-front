import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faCheckDouble,
  faExclamation,
  faQuestion,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [BrowserModule, FontAwesomeModule],
})
export class FontawesomeModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faCheck,
      faCheckDouble,
      faExclamation,
      faQuestion,
      faEllipsisV
    );
  }
}
