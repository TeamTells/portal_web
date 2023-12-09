import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './presentation/view/reset-password.component';
import { ComponentsModule } from 'src/app/core/components/components.module';
import {
  SvgArrowRight,
  SvgButtonLoading,
  SvgXMark,
} from 'src/app/core/components/svg-components/svg.components';
import { Validator } from 'src/app/core/validators/validator';
import { emailValidatorFactory } from 'src/app/core/validators/validators';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    SvgXMark,
    SvgArrowRight,
    SvgButtonLoading,
  ],
  providers: [
    {
      provide: 'ResetPasswordEmailValidator',
      useExisting: Validator,
      useFactory: emailValidatorFactory,
    },
  ],
})
export class ResetPasswordModule {}
