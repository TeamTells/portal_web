import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './presentation/sections.component';
import {FakeSectionService} from "./data/fake-section-service";
import {SectionRepository} from "./domain/section-repository";

@NgModule({
  declarations: [
    SectionsComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide: SectionRepository,
      useClass: FakeSectionService
    },
  ]
})
export class SectionsModule { }
