export class Item {

  constructor(public type1: string) {
  }

}

export class Paragraph extends Item {

  constructor(type1: string = "paragraph") {
    super(type1)
  }
}

export class Text extends Item {
  constructor(type1: string = "text",
              public text: string = "",
              public style: any = "") {
    super(type1);
  }

}


