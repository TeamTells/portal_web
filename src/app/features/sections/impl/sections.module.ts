import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './presentation/sections.component';
import {SectionServiceImpl} from "./data/section-service-impl";
import {SectionService} from "../api/section-service";
import {ComponentsModule} from "../../../core/components/components.module";
import {DocumentItemComponent} from "../../section/impl/presentation/components/document-item/document-item.component";

@NgModule({
  declarations: [
    SectionsComponent,
    DocumentItemComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    DocumentItemComponent
  ],
  providers: [
    {
      provide: SectionService,
      useClass: SectionServiceImpl
    },
  ]
})
export class SectionsModule { }
