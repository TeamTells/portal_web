import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './presentation/editor/editor.component';
import {SafeHtmlPipe} from "./presentation/editor/safe-html-pipe";


@NgModule({
  declarations: [
    EditorComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule
  ]
})
export class EditorModule { }
