import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontawesomeModule } from './fontawesome.module';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, FontawesomeModule],
  exports: [ButtonComponent],
})
export class UiModule {}
