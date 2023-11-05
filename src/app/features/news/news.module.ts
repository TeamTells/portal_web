import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './presentation/news.component';
import { BrowserModule } from '@angular/platform-browser';
import { FakeSectionEntity } from './state/sectionEntity';



@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    FakeSectionEntity
  ]
})
export class NewsModule { }
