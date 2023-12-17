import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/core/components/components.module';
import {
  SvgArrowRight,
  SvgLoading,
} from 'src/app/core/components/svg-components/svg.components';
import { EmptyRule, MaxLengthRule } from 'src/app/core/validators/rule';
import { Validator } from 'src/app/core/validators/validator';
import {
  emailValidatorFactory,
  phoneNumberValidatorFactory,
} from 'src/app/core/validators/validators';
import { RegistrationComponent } from './presentation/view/registration.component';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule, ComponentsModule, SvgLoading, SvgArrowRight],
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
