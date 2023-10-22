import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MainContentCardComponent } from './main-content-card/main-content-card.component';
import { ButtonRedComponent } from './button-red/button-red.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ButtonBackComponent } from './button-back/button-back.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { DropdownFieldComponent } from './dropdown-field/dropdown-field.component';
import { FieldErrorMessageComponent } from './field-error-message/field-error-message.component';
import { ButtonLightGrayComponent } from './button-light-gray/button-light-gray.component';

@NgModule({
  declarations: [
    CardComponent,
    MainContentCardComponent,
    ButtonRedComponent,
    ButtonBackComponent,
    InputFieldComponent,
    SearchFieldComponent,
    DropdownFieldComponent,
    FieldErrorMessageComponent,
    ButtonLightGrayComponent
  ],
  exports: [
    CardComponent,
    MainContentCardComponent,
    ButtonRedComponent,
    ButtonBackComponent,
    InputFieldComponent,
    SearchFieldComponent,
    DropdownFieldComponent,
    ButtonLightGrayComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})

export class ComponentsModule { }
