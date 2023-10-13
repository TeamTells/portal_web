import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './presentation/news.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    BrowserModule
    
  ]
})
export class NewsModule { }
