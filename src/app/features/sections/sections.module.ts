import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './presentation/sections.component';
import {SectionServiceImpl} from "./data/section-service-impl";
import {SectionService} from "./domain/section-service";
import {ComponentsModule} from "../../core/components/components.module";

@NgModule({
  declarations: [
    SectionsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  providers:[
    {
      provide: SectionService,
      useClass: SectionService
    },
  ]
})
export class SectionsModule { }
