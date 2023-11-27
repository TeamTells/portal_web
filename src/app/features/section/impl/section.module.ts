import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionComponent} from './presentation/view/section.component';
import {SectionService} from "./domain/section-service";
import {SectionServiceImpl} from "./data/section-service-impl";

@NgModule({
  declarations: [
    SectionComponent
  ],
  imports: [
    CommonModule,
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
