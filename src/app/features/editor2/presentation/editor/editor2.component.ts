import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {createEditor, Element} from 'slate';
import {withHistory} from 'slate-history';
import {SlateEditableComponent, withAngular} from 'slate-angular';
import isHotkey from 'is-hotkey';
import {DemoTextMarkComponent} from './components/text/text.component';
import {CustomEditor, CustomText, DocumentDataModel, MarkTypes} from "../../domain/model-types";
import {Editor2Service} from "../../domain/editor-service";
import {SlateModule} from 'slate-angular';
import {FormsModule} from "@angular/forms";
// import {isTTElement, isTTText, MarkTypes, TTElement, TTText,} from '../../domain/element-types';

const SLATE_DEV_MODE_KEY = 'slate-dev';

const HOTKEYS: Record<string, MarkTypes> = {
  'mod+b': "bold",
  'mod+i': "italic",
  'mod+u': "underline",
  // 'mod+`': .strike,
};

const LIST_TYPES = ['numbered-list', 'bulleted-list'];

@Component({
  standalone: true,
  selector: 'app-editor',
  imports: [
    SlateModule,
    FormsModule,
  ],
  templateUrl: './editor2.component.html',
  styleUrls: ['./editor2.component.scss'],
})
export class EditorComponent2 implements OnInit {
  value: DocumentDataModel;

  constructor(private editorService: Editor2Service) {
    this.value = this.editorService.getDocumentBy("---");
  }

  ngOnInit() {
    if (!localStorage.getItem(SLATE_DEV_MODE_KEY)) {
      console.log(
        `open dev mode use code：window.localStorage.setItem('${SLATE_DEV_MODE_KEY}', true);`
      );
    }
  }

  // toggleBlock = (format) => {
  //   const isActive = this.isBlockActive(format);
  //   const isList = LIST_TYPES.includes(format);
  //
  //   Transforms.unwrapNodes(this.editor, {
  //     match: (n) => LIST_TYPES.includes(Element.isElement(n) && n.type),
  //     split: true,
  //   });
  //   const newProperties: Element = {
  //     children: [],
  //     type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  //   };
  //   Transforms.setNodes(this.editor, newProperties);
  //
  //   if (!isActive && isList) {
  //     const block = {type: format, children: []};
  //     Transforms.wrapNodes(this.editor, block);
  //   }
  // };

  // toggleMark = (format) => {
  //   const isActive = this.isMarkActive(format);
  //
  //   if (isActive) {
  //     Editor.removeMark(this.editor, format);
  //   } else {
  //     Editor.addMark(this.editor, format, true);
  //   }
  // };
  //
  // isBlockActive = (format) => {
  //   const [match] = Editor.nodes(this.editor, {
  //     match: (n) => !Editor.isEditor(n) && n.type === format,
  //   });
  //
  //   return !!match;
  // };

  // isMarkActive = (format: MarkTypes) => {
  //   const marks = Editor.marks(this.editor);
  //   return marks ? marks[format] === true : false;
  // };

  // toolbarItems = [
  //   {
  //     format: MarkTypes.bold,
  //     icon: 'format_bold',
  //     active: this.isMarkActive,
  //     action: this.toggleMark
  //   },
  //   {
  //     format: MarkTypes.italic,
  //     icon: 'format_italic',
  //     active: this.isMarkActive,
  //     action: this.toggleMark
  //   },
  //   {
  //     format: MarkTypes.underline,
  //     icon: 'format_underlined',
  //     active: this.isMarkActive,
  //     action: this.toggleMark
  //   },
  //   {
  //     format: MarkTypes.code,
  //     icon: 'code',
  //     active: this.isMarkActive,
  //     action: this.toggleMark
  //   },
  //   {
  //     format: 'heading-one',
  //     icon: 'looks_one',
  //     active: this.isBlockActive,
  //     action: this.toggleBlock
  //   },
  //   {
  //     format: 'heading-two',
  //     icon: 'looks_two',
  //     active: this.isBlockActive,
  //     action: this.toggleBlock
  //   },
  //   {
  //     format: 'block-quote',
  //     icon: 'format_quote',
  //     active: this.isBlockActive,
  //     action: this.toggleBlock
  //   },
  //   {
  //     format: 'numbered-list',
  //     icon: 'format_list_numbered',
  //     active: this.isBlockActive,
  //     action: this.toggleBlock
  //   },
  //   {
  //     format: 'bulleted-list',
  //     icon: 'format_list_bulleted',
  //     active: this.isBlockActive,
  //     action: this.toggleBlock
  //   }
  // ];

  @ViewChild('heading_1', {read: TemplateRef, static: true})
  headingOneTemplate!: TemplateRef<any>;

  @ViewChild('heading_2', {read: TemplateRef, static: true})
  headingTwoTemplate!: TemplateRef<any>;

  @ViewChild('heading_3', {read: TemplateRef, static: true})
  headingThreeTemplate!: TemplateRef<any>;

  @ViewChild('blockquote', {read: TemplateRef, static: true})
  blockquoteTemplate!: TemplateRef<any>;

  @ViewChild('ul', {read: TemplateRef, static: true})
  ulTemplate!: TemplateRef<any>;

  @ViewChild('ol', {read: TemplateRef, static: true})
  olTemplate!: TemplateRef<any>;

  @ViewChild('li', {read: TemplateRef, static: true})
  liTemplate!: TemplateRef<any>;

  editor: CustomEditor = withHistory(withAngular(createEditor()));

  valueChange(event: any) {
    if (localStorage.getItem(SLATE_DEV_MODE_KEY)) {
      console.log(
        `anchor: ${JSON.stringify(
          this.editor.selection?.anchor
        )}\nfocus:  ${JSON.stringify(this.editor.selection?.focus)}`
      );
      console.log('operations: ', this.editor.operations);
    }
  }

  renderElement = (element: Element & { type: string }) => {
    if (element.type === 'heading-one') {
      return this.headingOneTemplate;
    }
    if (element.type === 'heading-two') {
      return this.headingTwoTemplate;
    }
    // if (element.type === 'heading-three') {
    //   return this.headingThreeTemplate;
    // }
    if (element.type === 'block-quote') {
      return this.blockquoteTemplate;
    }
    // if (element.type === 'numbered-list') {
    //   return this.olTemplate;
    // }
    if (element.type === 'bulleted-list') {
      return this.ulTemplate;
    }
    if (element.type === 'list-item') {
      return this.liTemplate;
    }
    return null;
  };

  renderText = (text: CustomText) => {
    if (
      text.bold ||
      text.italic ||
      text.code ||
      text.underline
    ) {
      return DemoTextMarkComponent;
    } else {
      return null;
    }
  };

  keydown = (event: KeyboardEvent) => {
    if (isHotkey('shift+enter', event)) {
      event.preventDefault();
      this.editor.insertText('\n', undefined);
    }
    for (const hotkey in HOTKEYS) {
      if (isHotkey(hotkey, event as any)) {
        event.preventDefault();
        const mark = HOTKEYS[hotkey as keyof typeof HOTKEYS];
        // this.toggleMark(mark);
      }
    }
  };
}
