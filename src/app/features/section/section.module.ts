import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './presentation/section.component';
import { RouterOutlet } from '@angular/router';
import { FakeSectionService } from '../sections/state/section.service';

@NgModule({
  declarations: [
    SectionComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[
    FakeSectionService
  ]
})
export class SectionModule { }
