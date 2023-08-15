import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MainComponent } from './presentation/main.component';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class MainModule { }
