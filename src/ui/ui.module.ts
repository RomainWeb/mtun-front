import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FontawesomeModule } from './fontawesome.module';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent, AvatarComponent],
  imports: [CommonModule, FontawesomeModule, NgOptimizedImage],
  exports: [ButtonComponent, HeaderComponent, AvatarComponent],
})
export class UiModule {}
