export class TextParagraph {

  constructor(
    public id: string,
    public spans: Array<TextSpan>,
  ) {

  }
}

export class TextSpan {

  constructor(
    public id: string,
    public text: string = "",
    public style?: any | null
  ) {
  }

}



