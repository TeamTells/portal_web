import {BaseEditor, BaseRange, Descendant, Element, Range} from 'slate'
import {HistoryEditor} from 'slate-history'
import {AngularEditor} from "slate-angular";

// export enum MarkTypes {
//   bold = 'bold',
//   italic = 'italic',
//   underline = 'underlined',
//   strike = 'strike',
//   code = 'code-line',
// }
export type MarkTypes = keyof Omit<CustomText, "text">
export type ElementTypes = CustomElement["type"]

export function isElementType(value: any): value is ElementTypes {
  const elementTypes: ElementTypes[] = ['heading-one', 'bulleted-list', 'numbered-list', 'paragraph', 'block-quote', 'check-list-item', 'editable-void', 'heading-two', 'image', 'link', 'button', 'badge', 'list-item', 'mention', 'paragraph', 'table-cell', 'title', 'video', 'code-line'];
  return elementTypes.includes(value);
}

//
// export type TTElement = Element & {
//   type: string;
// };
//
// export export function isTTElement(element: any): element is TTElement {
//   return 'type' in element && Element.isElement(element);
// }
//
// export type TTText = Text & {
//   [K in MarkTypes]?: boolean;
// };
//
// export export function isTTText(text: any): text is TTText {
//   return Text.isText(text);
// }

export type BlockQuoteElement = {
  type: 'block-quote'
  align?: string
  children: Descendant[]
}

export function isBlockQuoteElement(element: any): element is BlockQuoteElement {
  return Element.isElement(element) && element.type === 'block-quote';
}

export type BulletedListElement = {
  type: 'bulleted-list'
  align?: string
  children: Descendant[]
}

// Type casting method for BulletedListElement
export function isBulletedListElement(element: any): element is BulletedListElement {
  return Element.isElement(element) && element.type === 'bulleted-list';
}

export type NumberedListElement = {
  type: 'numbered-list'
  align?: string
  children: Descendant[]
}

// Type casting method for NumberedListElement
export function isNumberedListElement(element: any): element is NumberedListElement {
  return Element.isElement(element) && element.type === 'numbered-list';
}

export type CheckListItemElement = {
  type: 'check-list-item'
  checked: boolean
  children: Descendant[]
}

// Type casting method for CheckListItemElement
export function isCheckListItemElement(element: any): element is CheckListItemElement {
  return Element.isElement(element) && element.type === 'check-list-item';
}

export type EditableVoidElement = {
  type: 'editable-void'
  children: EmptyText[]
}

// Type casting method for EditableVoidElement
export function isEditableVoidElement(element: any): element is EditableVoidElement {
  return Element.isElement(element) && element.type === 'editable-void';
}

export type HeadingElement = {
  type: 'heading-one'
  align?: string
  children: Descendant[]
}

// Type casting method for HeadingElement
export function isHeadingElement(element: any): element is HeadingElement {
  return Element.isElement(element) && element.type === 'heading-one';
}

export type HeadingTwoElement = {
  type: 'heading-two'
  align?: string
  children: Descendant[]
}

// Type casting method for HeadingTwoElement
export function isHeadingTwoElement(element: any): element is HeadingTwoElement {
  return Element.isElement(element) && element.type === 'heading-two';
}

export type ImageElement = {
  type: 'image'
  url: string
  children: EmptyText[]
}

// Type casting method for ImageElement
export function isImageElement(element: any): element is ImageElement {
  return Element.isElement(element) && element.type === 'image';
}

export type LinkElement = { type: 'link'; url: string; children: Descendant[] }

// Type casting method for LinkElement
export function isLinkElement(element: any): element is LinkElement {
  return Element.isElement(element) && element.type === 'link';
}

export type ButtonElement = { type: 'button'; children: Descendant[] }

// Type casting method for ButtonElement
export function isButtonElement(element: any): element is ButtonElement {
  return Element.isElement(element) && element.type === 'button';
}

export type BadgeElement = { type: 'badge'; children: Descendant[] }

// Type casting method for BadgeElement
export function isBadgeElement(element: any): element is BadgeElement {
  return Element.isElement(element) && element.type === 'badge';
}

export type ListItemElement = { type: 'list-item'; children: Descendant[] }

// Type casting method for ListItemElement
export function isListItemElement(element: any): element is ListItemElement {
  return Element.isElement(element) && element.type === 'list-item';
}

export type MentionElement = {
  type: 'mention'
  // character: string
  children: CustomText[]
}

// Type casting method for MentionElement
export function isMentionElement(element: any): element is MentionElement {
  return Element.isElement(element) && element.type === 'mention';
}

export type ParagraphElement = {
  type: 'paragraph'
  align?: 'left' | 'center' | 'right'
  children: Descendant[]
  isFake?: boolean
}

// Type casting method for ParagraphElement
export function isParagraphElement(element: any): element is ParagraphElement {
  return Element.isElement(element) && element.type === 'paragraph';
}

// export type TableElement = { type: 'table'; children: TableRow[] }

export type TableCellElement = { type: 'table-cell'; children: CustomText[] }

// Type casting method for TableCellElement
export function isTableCellElement(element: any): element is TableCellElement {
  return Element.isElement(element) && element.type === 'table-cell';
}

// export type TableRowElement = { type: 'table-row'; children: TableCell[] }

export type TitleElement = { type: 'title'; children: Descendant[] }

// Type casting method for TitleElement
export function isTitleElement(element: any): element is TitleElement {
  return Element.isElement(element) && element.type === 'title';
}

export type VideoElement = { type: 'video'; url: string; children: EmptyText[] }

// Type casting method for VideoElement
export function isVideoElement(element: any): element is VideoElement {
  return Element.isElement(element) && element.type === 'video';
}

export type CodeBlockElement = {
  type: 'code-block'
  language: string
  children: Descendant[]
}

// Type casting method for CodeBlockElement
export function isCodeBlockElement(element: any): element is CodeBlockElement {
  return Element.isElement(element) && element.type === 'code-block';
}

export type CodeLineElement = {
  type: 'code-line'
  children: Descendant[]
}

// Type casting method for CodeLineElement
export function isCodeLineElement(element: any): element is CodeLineElement {
  return Element.isElement(element) && element.type === 'code-line';
}

export type CustomElement =
  | BlockQuoteElement
  | BulletedListElement
  | NumberedListElement
  | CheckListItemElement
  | EditableVoidElement
  | HeadingElement
  | HeadingTwoElement
  | ImageElement
  | LinkElement
  | ButtonElement
  | BadgeElement
  | ListItemElement
  | MentionElement
  | ParagraphElement
  // | TableElement
  // | TableRowElement
  | TableCellElement
  | TitleElement
  | VideoElement
  | CodeBlockElement
  | CodeLineElement

export type CustomText = {
  bold?: boolean
  underline?: boolean
  italic?: boolean
  code?: boolean
  text: string
}

export type EmptyText = {
  text: ""
}

// Type casting method for CustomText
export function isCustomText(text: any): text is CustomText {
  return 'text' in text && typeof text.text === 'string';
}

export type CustomEditor = BaseEditor &
  AngularEditor &
  HistoryEditor & {
  nodeToDecorations?: Map<Element, Range[]>
}

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor
    Element: CustomElement
    Text: CustomText
    Range: BaseRange & {
      [key: string]: unknown
    }
  }
}


export type DocumentDataModel = CustomElement[]
