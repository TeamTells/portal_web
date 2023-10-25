import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './presentation/news.component';
import { BrowserModule } from '@angular/platform-browser';
import { SectionEntity } from './presentation/menuItem';



@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    SectionEntity
  ]
})
export class NewsModule { }
