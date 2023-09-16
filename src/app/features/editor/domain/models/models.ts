export type Paragraph = TextParagraph | ImageParagraph

export class LongreadDocument {

  constructor(
    public title: string,
    public paragraphs: Array<Paragraph>,
  ) {
  }

}

export class TextParagraph {

  constructor(
    public type: String,
    public spans: Array<TextSpan>,
  ) {
  }
}

export class TextSpan {

  constructor(
    public text: string = "",
    public style?: TextStyle
  ) {
  }

}

export class ImageParagraph {

  constructor(
    public type: string,
    public url: string,
    public description: string
  ) {
  }

}

export class TextStyle {

  constructor(
    public bold?: Boolean,
    public cursive?: Boolean,
    public size?: number
  ) {
  }

}
