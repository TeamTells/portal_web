import { Descendant, BaseEditor, BaseRange, Range, Element } from 'slate'
import { HistoryEditor } from 'slate-history'
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
//
// export type TTElement = Element & {
//   type: string;
// };
//
// export function isTTElement(element: any): element is TTElement {
//   return 'type' in element && Element.isElement(element);
// }
//
// export type TTText = Text & {
//   [K in MarkTypes]?: boolean;
// };
//
// export function isTTText(text: any): text is TTText {
//   return Text.isText(text);
// }

export type BlockQuoteElement = {
  type: 'block-quote'
  align?: string
  children: Descendant[]
}

export type BulletedListElement = {
  type: 'bulleted-list'
  align?: string
  children: Descendant[]
}

export type CheckListItemElement = {
  type: 'check-list-item'
  checked: boolean
  children: Descendant[]
}

export type EditableVoidElement = {
  type: 'editable-void'
  children: EmptyText[]
}

export type HeadingElement = {
  type: 'heading-one'
  align?: string
  children: Descendant[]
}

export type HeadingTwoElement = {
  type: 'heading-two'
  align?: string
  children: Descendant[]
}

export type ImageElement = {
  type: 'image'
  url: string
  children: EmptyText[]
}

export type LinkElement = { type: 'link'; url: string; children: Descendant[] }

export type ButtonElement = { type: 'button'; children: Descendant[] }

export type BadgeElement = { type: 'badge'; children: Descendant[] }

export type ListItemElement = { type: 'list-item'; children: Descendant[] }

export type MentionElement = {
  type: 'mention'
  // character: string
  children: CustomText[]
}

export type ParagraphElement = {
  type: 'paragraph'
  align?: string
  children: Descendant[]
}

// export type TableElement = { type: 'table'; children: TableRow[] }

export type TableCellElement = { type: 'table-cell'; children: CustomText[] }

// export type TableRowElement = { type: 'table-row'; children: TableCell[] }

export type TitleElement = { type: 'title'; children: Descendant[] }

export type VideoElement = { type: 'video'; url: string; children: EmptyText[] }

export type CodeBlockElement = {
  type: 'code-block'
  language: string
  children: Descendant[]
}

export type CodeLineElement = {
  type: 'code-line'
  children: Descendant[]
}

export type CustomElement =
  | BlockQuoteElement
  | BulletedListElement
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

export type DocumentDataModel = [CustomElement]
