import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionComponent} from './presentation/view/section.component';
import {SectionService} from "./domain/section-service";
import {SectionServiceImpl} from "./data/section-service-impl";
import {SectionsModule} from "../../sections/impl/sections.module";
import {SvgGearShape, SvgSquare} from "../../employees/components/svg-components/svg.components";

@NgModule({
  declarations: [
    SectionComponent
  ],
  imports: [
    CommonModule,
    SectionsModule,
    SvgGearShape,
    SvgSquare,
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
