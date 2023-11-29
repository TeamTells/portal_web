import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-core-main-content-card',
  templateUrl: './main-content-card.component.html',
})
export class MainContentCardComponent {
  @Input() class: string | string[] = [];
}
