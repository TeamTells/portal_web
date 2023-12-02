import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MainComponent } from './presentation/main.component';
import {RouterOutlet} from "@angular/router";
import { ComponentsModule } from 'src/app/core/components/components.module';



@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterOutlet,
    ComponentsModule
  ]
})
export class MainModule { }
