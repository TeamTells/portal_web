import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './presentation/sections.component';
import { FakeSectionService } from './state/section.service';



@NgModule({
  declarations: [
    SectionsComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    FakeSectionService
  ]
})
export class SectionsModule { }
