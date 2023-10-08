import { Pipe, PipeTransform } from '@angular/core';
import {ImageParagraph, TextParagraph} from "../../domain/models/models";


@Pipe({ name: 'textCast' })
export class TextCastPipe implements PipeTransform {
  transform(value: any, ...args: any[]): TextParagraph {
    return value
  }

}


@Pipe({ name: 'imageCast' })
export class ImageCastPipe implements PipeTransform {
  transform(value: any, ...args: any[]): ImageParagraph {
    return value
  }

}
