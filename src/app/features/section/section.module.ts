import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './presentation/section.component';
import { RouterOutlet } from '@angular/router';
import { FakeSectionEntity } from '../news/state/sectionEntity';

@NgModule({
  declarations: [
    SectionComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[
    FakeSectionEntity
  ]
})
export class SectionModule { }
