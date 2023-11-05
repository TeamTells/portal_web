import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './presentation/sections.component';
import { FakeSectionEntity } from './state/sectionEntity';



@NgModule({
  declarations: [
    SectionsComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    FakeSectionEntity
  ]
})
export class SectionsModule { }
