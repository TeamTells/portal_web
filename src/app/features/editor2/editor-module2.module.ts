import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Editor2Service} from "./domain/editor-service";
import {Editor2ServiceImpl} from "./data/editor-service-impl";
import {SlateModule} from 'slate-angular';
import {EditorComponent2} from "./presentation/editor/editor2.component";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SlateModule,
    EditorComponent2,
  ],
  providers: [
    {
      provide: Editor2Service,
      useClass: Editor2ServiceImpl
    },
  ]
})
export class EditorModule2 {
}
