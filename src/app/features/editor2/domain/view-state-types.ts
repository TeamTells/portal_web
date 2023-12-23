export type ContextMenuOptions = {
  textStyle: string;
  textSize: number;
  isBold: boolean;
  isItalic: boolean;
  isUnderlined: boolean;
  textColor: string;
  paragraphAlignment: 'left' | 'center' | 'right';
};

export type BoldCommand = {
  type: 'bold',
}

export type ItalicCommand = {
  type: 'italic',
}

export type UnderlineCommand = {
  type: 'underline',
}

export type DeleteCurrentElement = {
  type: 'delete_current_element',
}

export type InsertNewline = {
  type: 'insert_newline',
}

export type SetElementType = {
  type: 'toggle_element_type',
  kind: string
}

export type CreateTypedElement = {
  type: 'create_typed_element',
  kind: string
}

export type ElementType =
  'text' |
  'heading_1' |
  'heading_2' |
  'bulleted_list' |
  'numbered_list' |
  'image' |
  'video'

export type EditorCommand =
  BoldCommand
  | ItalicCommand
  | UnderlineCommand
  | DeleteCurrentElement
  | CreateTypedElement
  | InsertNewline
  | SetElementType
