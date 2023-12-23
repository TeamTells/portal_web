import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  SvgArrowRight,
  SvgButtonLoading,
} from 'src/app/core/components/svg-components/svg.components';
import { ComponentsModule } from '../../core/components/components.module';
import { EmptyRule } from '../../core/validators/rule';
import { Validator } from '../../core/validators/validator';
import { AuthorizationComponent } from './presentation/view/authorization.component';

@NgModule({
  declarations: [AuthorizationComponent],
  exports: [AuthorizationComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    NgOptimizedImage,
    HttpClientModule,
    SvgArrowRight,
    SvgButtonLoading,
  ],
  providers: [
    {
      provide: 'EmailValidator',
      useExisting: Validator,
      useFactory: AuthorizationModule.emailValidatorFactory,
    },
    {
      provide: 'PasswordValidator',
      useExisting: Validator,
      useFactory: AuthorizationModule.passwordValidatorFactory,
    },
  ],
})
export class AuthorizationModule {
  public static emailValidatorFactory = () =>
    new Validator([new EmptyRule('Введите E-mail')]);

  public static passwordValidatorFactory = () =>
    new Validator([new EmptyRule('Введите пароль')]);
}
