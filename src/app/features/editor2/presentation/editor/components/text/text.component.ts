import { ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import {BaseTextComponent, SlateModule} from 'slate-angular';
import {MarkTypes} from "../../../../domain/model-types";

// export enum MarkTypes {
//   bold = 'bold',
//   italic = 'italic',
//   underline = 'underlined',
//   strike = 'strike',
//   code = 'code-line'
// }

@Component({
  selector: 'span[textMark]',
  template: `<slate-leaves [context]="context" [viewContext]="viewContext"></slate-leaves>`,
  host: {
    'data-slate-node': 'text'
  },
  standalone: true,
  imports: [SlateModule]
})
export class DemoTextMarkComponent extends BaseTextComponent {
  attributes: string[] = [];

  constructor(public override elementRef: ElementRef, public renderer2: Renderer2, cdr: ChangeDetectorRef) {
    super(elementRef, cdr);
  }

  applyTextMark() {
    this.attributes.forEach(attr => {
      this.renderer2.removeAttribute(this.elementRef.nativeElement, attr);
    });
    this.attributes = [];
    for (const key in this.text) {
      if (this.text.hasOwnProperty(key) && key !== 'text' && !!this.text[key as MarkTypes]) {
        const attr = `slate-${key}`;
        this.renderer2.setAttribute(this.elementRef.nativeElement, attr, 'true');
        this.attributes.push(attr);
      }
    }
  }

  override onContextChange() {
    super.onContextChange();
    this.applyTextMark();
  }
}
