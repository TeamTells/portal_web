import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './presentation/section.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    SectionComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SectionModule { }
