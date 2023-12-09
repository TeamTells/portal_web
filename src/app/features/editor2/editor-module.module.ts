import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Editor2Service} from "./domain/editor-service";
import {Editor2ServiceImpl} from "./data/editor-service-impl";
import {SlateModule} from 'slate-angular';
import {EditorComponent} from "./presentation/editor/editor.component";
import {FormsModule} from "@angular/forms";
import {TextMarkComponent} from "./presentation/editor/components/text/text.component";
import {BreadcrumbsComponent} from "./presentation/editor/components/bread";
import {RouterLink} from "@angular/router";
import { SelectionContextMenuComponent } from './presentation/editor/components/selection-context-menu/selection-context-menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { GutterButtonComponent } from './presentation/editor/components/gutter-button/gutter-button.component';

@NgModule({
  declarations: [
    TextMarkComponent,
    EditorComponent,
    BreadcrumbsComponent,
    SelectionContextMenuComponent,
    GutterButtonComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SlateModule,
    RouterLink,
    BrowserAnimationsModule,
    NgOptimizedImage,
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
