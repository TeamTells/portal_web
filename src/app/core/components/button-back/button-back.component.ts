import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-core-button-back',
  templateUrl: './button-back.component.html',
})
export class ButtonBackComponent {
  constructor(private location: Location) {}

  backClicked() {
    this.location.back();
  }
}
