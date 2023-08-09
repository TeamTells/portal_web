import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {AuthorizationComponent} from './presentation/authorization.component';
import {ComponentsModule} from "../../core/components/components.module";
import {AuthorizationState} from "./presentation/state/authorization-state";
import {AuthorizationExecutor} from "./presentation/state/authorization-executor";
import {AuthorizationReducer} from "./presentation/state/authorization-reducer";

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
  ]
})
export class AuthorizationModule {
}
