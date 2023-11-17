import { Component,Input } from '@angular/core';

export interface UnderlinedListProp{
  image: string,
  first: string,
  second: string,
}


@Component({
  selector: 'app-underlined-list',
  templateUrl: './underlined-list.component.html',
})
export class UnderlinedListComponent {
  @Input() prop:UnderlinedListProp[] = [
    {
      image:"",
      first:"",
      second:"",
    },
  ];
}
