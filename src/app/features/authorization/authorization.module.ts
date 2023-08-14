import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {AuthorizationComponent} from './presentation/view/authorization.component';
import {ComponentsModule} from "../../core/components/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Validator} from "../../core/validators/validator";
import {EmptyRule} from "../../core/validators/rule";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AuthorizationComponent,

  ],
  exports: [
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: "EmailValidator",
      useExisting: Validator,
      useFactory: AuthorizationModule.emailValidatorFactory,
    },
    {
      provide: "PasswordValidator",
      useExisting: Validator,
      useFactory: AuthorizationModule.passwordValidatorFactory,
    }
  ]
})
export class AuthorizationModule {

  public static emailValidatorFactory = () => new Validator([
    new EmptyRule("Введите E-mail"),
  ])

  public static passwordValidatorFactory = () => new Validator([
    new EmptyRule("Введите пароль"),
  ])

}
