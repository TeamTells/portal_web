import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/core/components/components.module';
import {
  SvgArrowRight,
  SvgButtonLoading,
} from 'src/app/core/components/svg-components/svg.components';
import { Validator } from 'src/app/core/validators/validator';
import { emailValidatorFactory } from 'src/app/core/validators/validators';
import { ResetPasswordComponent } from './presentation/view/reset-password.component';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [CommonModule, ComponentsModule, SvgArrowRight, SvgButtonLoading],
  providers: [
    {
      provide: 'ResetPasswordEmailValidator',
      useExisting: Validator,
      useFactory: emailValidatorFactory,
    },
  ],
})
export class ResetPasswordModule {}
