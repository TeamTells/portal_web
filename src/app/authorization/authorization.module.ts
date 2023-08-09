import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './presentation/authorization.component';
import {ComponentsModule} from "../core/components/components.module";



@NgModule({
  declarations: [
    AuthorizationComponent
  ],
  exports: [
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class AuthorizationModule { }
