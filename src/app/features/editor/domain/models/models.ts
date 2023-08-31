export class TextParagraph {

  constructor(
    public type: String,
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

export class ImageParagraph {

  constructor(
    public type: string,
    public id: string,
    public url: string,
    public description: string
  ) {
  }

}



