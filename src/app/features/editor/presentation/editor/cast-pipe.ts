import { Pipe, PipeTransform } from '@angular/core';
import {TextParagraph} from "../../domain/models/models";


@Pipe({ name: 'cast' })
export class CastPipe implements PipeTransform {
  transform(value: any, ...args: any[]): TextParagraph {
    return value
  }

}
