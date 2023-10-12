import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SearchFieldComponent } from './search-field/search-field.component';

@NgModule({
  declarations: [
    CardComponent,
    SearchFieldComponent,
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
