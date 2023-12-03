import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionComponent} from './presentation/view/section.component';
import {SectionService} from "./domain/section-service";
import {SectionServiceImpl} from "./data/section-service-impl";
import {SectionsModule} from "../../sections/impl/sections.module";

@NgModule({
  declarations: [
    SectionComponent
  ],
    imports: [
        CommonModule,
        SectionsModule,
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
