import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionComponent} from './presentation/view/section.component';
import {SectionService} from "./domain/section-service";
import {SectionServiceImpl} from "./data/section-service-impl";
import {SectionsModule} from "../../sections/impl/sections.module";
import {
    SvgBorderedArrow,
    SvgGearShape,
    SvgPlus,
    SvgSquare
} from "../../../../core/components/svg-components/svg.components";
import {RouterOutlet} from "@angular/router";
import {SectionContentComponent} from "../../contents/impl/presentation/view/section-content.component";

@NgModule({
  declarations: [
    SectionComponent,
    SectionContentComponent
  ],
  imports: [
    CommonModule,
    SectionsModule,
    SvgGearShape,
    SvgSquare,
    SvgBorderedArrow,
    SvgPlus,
    RouterOutlet,
  ],
  providers: [
    {
      provide: SectionService,
      useClass: SectionServiceImpl
    },
  ]
})
export class SectionModule {
}
