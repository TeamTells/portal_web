import {Descendant, Editor, Element, Node, Path, Text, Transforms} from 'slate';
import {isHeadingElement, isHeadingTwoElement, isParagraphElement} from "../domain/model-types";

export function isEmptyNode(node: Node): boolean {
  // Check if the node is a Text node and if it's empty
  if (Text.isText(node) && node.text.trim() === '') {
    return true;
  }

  // Check if the node is an Element and if it's empty
  if (Element.isElement(node)) {
    // If the node has no children, it's empty
    if (node.children.length === 0) {
      return true;
    }

    // If all of the node's children are empty, the node is empty
    return (node.children as Descendant[]).every(isEmptyNode);
  }

  // If the node is neither a Text nor an Element, it's not empty
  return false;
}


export function deleteSelectedRootElement(editor: Editor) {
  const {selection} = editor;
  if (selection) {
    const [match] = Editor.nodes(editor, {
      at: selection,
      match: n => Element.isElement(n) && Editor.isBlock(editor, n),
    });

    if (match) {
      const [node, path] = match;
      Transforms.removeNodes(editor, {at: path});
    }
  }
}

export function insertElementAfterSelection(editor: Editor, newElement: Element) {
  const {selection} = editor;
  if (selection) {
    const [match] = Editor.nodes(editor, {
      at: selection,
      match: n => Element.isElement(n) && Editor.isBlock(editor, n)
    });

    if (match) {
      const [node, path] = match;
      const newPath = Path.next(path);
      Transforms.insertNodes(editor, newElement, {at: newPath});
    }
  }
}

export function replaceSelectedRootElement(editor: Editor, newElement: Element) {
  const { selection } = editor;
  if (selection) {
    const [match] = Editor.nodes(editor, {
      at: selection,
      match: n => Element.isElement(n) && Editor.isBlock(editor, n),
    });

    if (match) {
      const [node, path] = match;
      Transforms.removeNodes(editor, { at: path });
      Transforms.insertNodes(editor, newElement, { at: path });
      Transforms.select(editor, path);
    }
  }
}

export function switchToParagraph(editor: Editor) {
  const { selection } = editor;
  if (selection) {
    const [match] = Editor.nodes(editor, {
      match: n => isHeadingElement(n) || isHeadingTwoElement(n),
    });

    if (match) {
      Transforms.setNodes(
        editor,
        { type: 'paragraph' },
        { match: n => Element.isElement(n) && Editor.isBlock(editor, n) }
      );
    }
  }
}

export function createNewElementOfKind(kind: string): Element {
  switch (kind) {
    case 'paragraph':
      return {
        type: 'paragraph',
        children: [{text: ''}]
      };
    case 'heading-one':
      return {
        type: 'heading-one',
        children: [{text: ''}]
      };
    case 'heading-two':
      return {
        type: 'heading-two',
        children: [{text: ''}]
      };
    case 'bulleted-list':
      return {
        type: 'bulleted-list',
        children: [{type: 'list-item', children: []}]
      };
    case 'numbered-list':
      return {
        type: 'numbered-list',
        children: [{type: 'list-item', children: []}]
      };
    case 'image':
      return {
        type: 'image',
        url: '',
        children: [{text: ''}]
      };
    case 'video':
      return {
        type: 'video',
        url: '',
        children: [{text: ''}]
      };
    default:
      throw new Error(`Unsupported kind: ${kind}`);
  }
}

export function addFakeParagraphToEnd(editor: Editor) {
  const lastNode = editor.children[editor.children.length - 1];

  if (!Element.isElement(lastNode) || lastNode.type !== 'paragraph' || lastNode.isFake !== true) {
    Transforms.insertNodes(editor, {type: 'paragraph', children: [{text: ''}], isFake: true}, {at: Editor.end(editor, [])});
  }
}

export function removeFakeProperties(editor: Editor) {
  for (let i = 0; i < editor.children.length - 1; i++) {
    const node = editor.children[i];

    if (isParagraphElement(node) && node.isFake === true) {
      const newNode = {...node, isFake: undefined};
      Transforms.setNodes(editor, newNode, {at: [i]});
    }
  }
}

export const withNewLineAsParagraph = (editor: Editor) => {
  const { insertBreak } = editor;

  editor.insertBreak = () => {
    const [match] = Editor.nodes(editor, {
      match: n =>
        !Editor.isEditor(n) && Element.isElement(n) && isHeadingElement(n) || isHeadingTwoElement(n),
    });

    if (match) {
      Transforms.insertNodes(editor, { type: 'paragraph', children: [{ text: '' }] });
    } else {
      insertBreak();
    }
  };

  return editor;
};
