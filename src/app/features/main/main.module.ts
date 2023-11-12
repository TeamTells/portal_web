import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MainComponent } from './presentation/main.component';
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterOutlet
  ]
})
export class MainModule { }
