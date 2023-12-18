import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/core/components/components.module';
import {
  SvgArrowRight,
  SvgButtonLoading,
  SvgXMark,
} from 'src/app/core/components/svg-components/svg.components';
import { Validator } from 'src/app/core/validators/validator';
import { passwordValidatorFactory } from 'src/app/core/validators/validators';
import { NewPasswordComponent } from './presentation/view/new-password.component';

@NgModule({
  declarations: [NewPasswordComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    SvgXMark,
    SvgArrowRight,
    SvgButtonLoading,
  ],
  providers: [
    {
      provide: 'NewPasswordPasswordValidator',
      useExisting: Validator,
      useFactory: passwordValidatorFactory,
    },
  ],
})
export class NewPasswordModule {}
