import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorComponent2} from './presentation/editor/editor-component2.component';
import {SafeHtmlPipe} from "./presentation/editor/safe-html-pipe";
import {EditorService} from "./domain/editor-service";
import {EditorServiceImpl} from "./data/editor-service-impl";
import {ImageCastPipe, TextCastPipe} from "./presentation/editor/cast-pipe";


@NgModule({
    declarations: [
        EditorComponent2,
        SafeHtmlPipe,
        ImageCastPipe,
        TextCastPipe
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
export class EditorModule2 {
}
