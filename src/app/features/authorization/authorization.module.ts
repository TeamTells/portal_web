import {inject, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {AuthorizationComponent} from './presentation/authorization.component';
import {ComponentsModule} from "../../core/components/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Validator} from "../../core/validators/validator";
import {EmailRule, EmptyRule} from "../../core/validators/rule";

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
        FormsModule,
    ],
    providers:[
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
