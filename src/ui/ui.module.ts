import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FontawesomeModule } from './fontawesome.module';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { InputDirective } from './components/input/input.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    AvatarComponent,
    InputDirective,
  ],
  imports: [CommonModule, FontawesomeModule, NgOptimizedImage],
  exports: [ButtonComponent, HeaderComponent, AvatarComponent, InputDirective],
})
export class UiModule {}
