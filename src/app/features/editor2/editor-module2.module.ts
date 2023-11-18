import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Editor2Service} from "./domain/editor-service";
import {Editor2ServiceImpl} from "./data/editor-service-impl";
import {SlateModule} from 'slate-angular';
import {EditorComponent2} from "./presentation/editor/editor2.component";
import { PlusButtonComponent } from './presentation/editor/components/plus-button/plus-button.component';
import {FormsModule} from "@angular/forms";
import {DemoTextMarkComponent} from "./presentation/editor/components/text/text.component";
import {BreadcrumbsComponent} from "./presentation/editor/components/bread";
import {RouterLink} from "@angular/router";
import { SelectionContextMenuComponent } from './presentation/editor/components/selection-context-menu/selection-context-menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    PlusButtonComponent,
    DemoTextMarkComponent,
    EditorComponent2,
    BreadcrumbsComponent,
    SelectionContextMenuComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SlateModule,
    RouterLink,
    BrowserAnimationsModule,
    NgOptimizedImage
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
