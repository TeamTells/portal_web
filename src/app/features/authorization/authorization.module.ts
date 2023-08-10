import {inject, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {AuthorizationComponent} from './presentation/authorization.component';
import {ComponentsModule} from "../../core/components/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {emailValidatorFactory} from "../../core/validators/validators";
import {Validator} from "../../core/validators/validator";

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
            provide: Validator,
            useFactory: emailValidatorFactory,
        }
    ]
})
export class AuthorizationModule {

}
