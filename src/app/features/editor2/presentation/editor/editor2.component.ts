import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {createEditor, Editor, Element, Path,Range, Transforms} from 'slate';
import {withHistory} from 'slate-history';
import {AngularEditor, withAngular} from 'slate-angular';
import isHotkey from 'is-hotkey';
import {TextMarkComponent} from './components/text/text.component';
import {
  CustomEditor, CustomElement,
  CustomText,
  DocumentDataModel,
  ElementTypes,
  isCustomText,
  isElementType,
  isParagraphElement,
  MarkTypes
} from "../../domain/model-types";
import {Editor2Service} from "../../domain/editor-service";
import {ContextMenuOptions, EditorCommand} from "../../domain/view-state-types";
import {
  addFakeParagraphToEnd,
  createNewElementOfKind,
  deleteSelectedRootElement,
  isEmptyNode,
  removeFakeProperties,
  replaceSelectedRootElement, withNewLineAsParagraph
} from "../../utils/slate-utils";

const SLATE_DEV_MODE_KEY = 'slate-dev';

const HOTKEYS_COMMANDS: { [hotkey: string]: EditorCommand } = {
  'mod+b': {type: 'bold'},
  'mod+i': {type: 'italic'},
  'mod+u': {type: 'underline'},
  'mod+backspace': {type: 'delete_current_element'},
  'mod+del': {type: 'delete_current_element'},
  'mod+shift+1': {type: 'toggle_element_type', kind: 'heading-one'},
  'mod+shift+2': {type: 'toggle_element_type', kind: 'heading-two'},
  'mod+shift+l': {type: 'toggle_element_type', kind: 'bulleted-list'},
  'shift+enter': {type: 'insert_newline'},
};

const LIST_TYPES = ['numbered-list', 'bulleted-list'];

@Component({
  // standalone: true,
  selector: 'app-editor',
  templateUrl: './editor2.component.html',
  styleUrls: ['./editor2.component.scss'],
})
export class EditorComponent2 implements OnInit {
  value: DocumentDataModel;
  blurSelection: any;
  removeButton = {
    offsetLeft: 0,
    offsetTop: 0,
    visible: false,
  };
  plusButton = {
    offsetLeft: 0,
    offsetTop: 0,
    visible: false,
  };
  selMenu = {
    offsetLeft: 0,
    offsetTop: 0,
    visible: false,
  };
  contextMenuOptions: ContextMenuOptions = {
    textStyle: "paragraph",
    textSize: 10,
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    textColor: "#000000",
    paragraphAlignment: 'left'
  };

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

  editor: CustomEditor = withNewLineAsParagraph(withHistory(withAngular(createEditor())));


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

  toggleElementKind = (format: ElementTypes) => {
    const isActive = this.isBlockActive(format);
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(this.editor, {
      match: n => Element.isElement(n) && LIST_TYPES.includes(n.type),
      split: true
    });
    const newProperties: Partial<Element> = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format
    };
    Transforms.setNodes(this.editor, newProperties);

    if (!isActive && isList) {
      let block: CustomElement;
      block = { type: format, children: [] } as CustomElement;
      Transforms.wrapNodes(this.editor, block);
    }
  };

  toggleMark = (format: MarkTypes) => {
    console.log("Toggle mark ", format)
    const isActive = this.isMarkActive(format);

    if (isActive) {
      Editor.removeMark(this.editor, format);
    } else {
      Editor.addMark(this.editor, format, true);
    }
  };

  isBlockActive = (format: ElementTypes) => {
    const [match] = Editor.nodes(this.editor, {
      match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
    });

    return !!match;
  };

  isMarkActive = (format: MarkTypes) => {
    const marks = Editor.marks(this.editor);
    return marks ? marks[format] === true : false;
  };

  valueChange(event: any) {
    if (this.editor.selection == null) {
      if (this.blurSelection) {
        Transforms.select(this.editor, this.blurSelection);
        this.blurSelection = null
        AngularEditor.focus(this.editor);
      }
    }
    addFakeParagraphToEnd(this.editor)
    removeFakeProperties(this.editor)
    console.log(
      `event: ${JSON.stringify(
        event
      )}`
    );
    console.log(
      `anchor: ${JSON.stringify(
        this.editor.selection?.anchor
      )}\nfocus:  ${JSON.stringify(this.editor.selection?.focus)}`
    );
    console.log('operations: ', this.editor.operations);
    if (this.editor.selection != null) {
      let selection = Editor.unhangRange(this.editor, this.editor.selection)
      console.log("Unhanged sel is ", selection)
      if (Range.isCollapsed(selection)) {
        this.selMenu.visible = false;
        console.log("Selection is zero-char")
        let [node, path] = Editor.parent(this.editor, selection.focus);
        console.log("Selection is ", node)
        let domNode = AngularEditor.toDOMNode(this.editor, node)
        let [buttonModel, otherButton] = isEmptyNode(node) ? [this.plusButton, this.removeButton] : [this.removeButton, this.plusButton]
        otherButton.visible = false
        buttonModel.offsetLeft = domNode.offsetLeft - 50;
        buttonModel.offsetTop = domNode.offsetTop;
        buttonModel.visible = true
      } else {
        console.log("Selection is multi-char")
        let [node, path] = Editor.parent(this.editor, selection.focus);
        console.log("Selection is ", node)
        let domNode = AngularEditor.toDOMNode(this.editor, node)
        this.plusButton.visible = this.removeButton.visible = false
        this.selMenu.offsetTop = domNode.offsetTop;
        this.selMenu.offsetLeft = domNode.offsetLeft;
        this.selMenu.visible = true;
      }
    } else {
      this.plusButton.visible = false
    }

    console.log(this.collectMenuOptions())
    this.contextMenuOptions = this.collectMenuOptions()
  }

  onBlur(event: any): void {
    this.blurSelection = this.editor.selection;
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
    if (element.type === 'numbered-list') {
      return this.olTemplate;
    }
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
      return TextMarkComponent;
    } else {
      return null;
    }
  };

  keydown = (event: KeyboardEvent) => {
    for (const hotkey in HOTKEYS_COMMANDS) {
      if (isHotkey(hotkey, event as any)) {
        event.preventDefault();
        this.onContextCommand(HOTKEYS_COMMANDS[hotkey]);
      }
    }
  };

  collectMenuOptions = (): ContextMenuOptions => {
    const [match] = Editor.nodes(this.editor, {
      match: n => isParagraphElement(n),
    });

    let textStyle = '';
    let textSize = 12;
    let isBold = false;
    let isItalic = false;
    let isUnderlined = false;
    let textColor = '#000000';
    let paragraphAlignment: 'left' | 'center' | 'right' = 'left';

    if (match) {
      const [paragraphNode] = match;
      if (isParagraphElement(paragraphNode)) {
        if (paragraphNode.align) {
          paragraphAlignment = paragraphNode.align;
        }
      }
    }

    const [textNode] = Editor.nodes(this.editor, {
      match: n => isCustomText(n),
    });

    if (textNode) {
      const [text] = textNode;
      if (isCustomText(text)) {
        textStyle = 'custom'; // Replace with your logic to determine the text style
        textSize = 12; // Replace with your logic to determine the text size
        isBold = !!text.bold;
        isItalic = !!text.italic;
        isUnderlined = !!text.underline;
        textColor = '#000000'; // Replace with your logic to determine the text color
      }
    }

    return {
      textStyle,
      textSize,
      isBold,
      isItalic,
      isUnderlined,
      textColor,
      paragraphAlignment,
    };
  }

  onContextCommand = (command: EditorCommand) => {
    console.log("Processing contextual command", command)
    switch (command.type) {
      case 'bold':
        this.toggleMark('bold');
        break;
      case 'italic':
        this.toggleMark('italic');
        break;
      case 'underline':
        this.toggleMark('underline');
        break;
      case 'delete_current_element':
        deleteSelectedRootElement(this.editor)
        break;
      case 'insert_newline':
        this.editor.insertText('\n', undefined);
        break;
      case 'toggle_element_type':
        if (isElementType(command.kind))
          this.toggleElementKind(command.kind);
        break;
      case 'create_typed_element':
        let newElement = createNewElementOfKind(command.kind);
        console.log("Trying to insert", newElement)
        replaceSelectedRootElement(this.editor, newElement)
        break;
      default:
        throw new Error(`Unsupported command type: ${command}`);
    }
  };
  protected readonly isEmptyNode = isEmptyNode;
}
