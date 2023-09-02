import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorComponent} from './presentation/editor/editor.component';
import {SafeHtmlPipe} from "./presentation/editor/safe-html-pipe";
import {EditorService} from "./domain/EditorService";
import {EditorServiceImpl} from "./data/EditorServiceImpl";


@NgModule({
  declarations: [
    EditorComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: EditorService,
      useClass: EditorServiceImpl
    },
  ]
})
export class EditorModule {
}
