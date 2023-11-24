import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileChangePasswordComponent } from './presentation/view/profile-change-password.component';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from 'src/app/core/components/components.module';
import { Validator } from 'src/app/core/validators/validator';
import { EmptyRule, MaxLengthRule, MinLengthRule } from 'src/app/core/validators/rule';

let passwordValidatorForPasswordChangeFactory = () => new Validator([
  new EmptyRule('Введите пароль'),
  new MinLengthRule('Пароль должен быть длиннее 8 символов',8),
  new MaxLengthRule('Пароль не может быть длиннее 25 символов',25),
]);
 


@NgModule({
  declarations: [
    ProfileChangePasswordComponent,
  ],
  exports: [
    ProfileChangePasswordComponent,
  ],
  imports: [
    ComponentsModule,
    CommonModule,
  ],
  providers:[
    // TODO: сгорело очко
    /*{
      provide: 'PasswordValidatorForPasswordChange',
      useExisting: Validator,
      useFactory: passwordValidatorForPasswordChangeFactory,
    },*/
  ], 
})
export class ChangePasswordModule {
 }
