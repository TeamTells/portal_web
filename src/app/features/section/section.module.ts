import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './presentation/section.component';
import { RouterOutlet } from '@angular/router';
import { SectionEntity } from '../news/presentation/menuItem';

@NgModule({
  declarations: [
    SectionComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[
    SectionEntity
  ]
})
export class SectionModule { }
