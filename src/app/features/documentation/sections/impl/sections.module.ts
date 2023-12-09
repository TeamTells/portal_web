import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './presentation/view/sections.component';
import {SectionServiceImpl} from "./data/section-service-impl";
import {SectionService} from "../api/section-service";
import {ComponentsModule} from "../../../../core/components/components.module";
import {DocumentItemComponent} from "../../section-menu/impl/presentation/components/document-item/document-item.component";
import {
    SvgArrow,
    SvgBorderedArrow,
    SvgDot,
    SvgPlus,
    SvgTripleDot
} from "../../../employees/components/svg-components/svg.components";

@NgModule({
  declarations: [
    SectionsComponent,
    DocumentItemComponent
  ],
    imports: [
        CommonModule,
        ComponentsModule,
        SvgArrow,
        SvgDot,
        SvgBorderedArrow,
        SvgPlus,
        SvgTripleDot
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
