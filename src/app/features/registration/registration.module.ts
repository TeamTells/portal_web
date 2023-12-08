import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './presentation/view/registration.component';
import { ComponentsModule } from 'src/app/core/components/components.module';
import { Validator } from 'src/app/core/validators/validator';
import { EmptyRule, MaxLengthRule } from 'src/app/core/validators/rule';
import {
  emailValidatorFactory,
  phoneNumberValidatorFactory,
} from 'src/app/core/validators/validators';
import {
  SvgArrowRight,
  SvgLoading,
  SvgXMark,
} from 'src/app/core/components/svg-components/svg.components';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    SvgXMark,
    SvgLoading,
    SvgArrowRight,
  ],
  providers: [
    {
      provide: 'RegistrationEmailValidator',
      useExisting: Validator,
      useFactory: emailValidatorFactory,
    },
    {
      provide: 'RegistrationNameValidator',
      useExisting: Validator,
      useFactory: RegistrationModule.nameValidatorFactory,
    },
    {
      provide: 'RegistrationPhoneNumberValidator',
      useExisting: Validator,
      useFactory: phoneNumberValidatorFactory,
    },
  ],
})
export class RegistrationModule {
  public static nameValidatorFactory = () =>
    new Validator([
      new EmptyRule('Введите имя'),
      new MaxLengthRule('Имя не может быть больше 50 символов', 50),
    ]);
}
