import { Component, Input } from '@angular/core';

@Component({
  selector: 'plus-button',
  templateUrl: './plus-button.component.html',
  styleUrls: ['./plus-button.component.css']
})
export class PlusButtonComponent {
  @Input() top: number = 0;
  @Input() left: number = 0;
  @Input() isVisible: boolean = false;

  constructor() { }
}
