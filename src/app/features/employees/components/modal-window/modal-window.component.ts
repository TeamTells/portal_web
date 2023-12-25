import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'employees-modal-window',
  templateUrl: './modal-window.component.html',
})
export class ModalWindowComponent {
  @Input() data: ModalWindowData = 
  {
    title: "Test",
    submit: "Submit",
    cancel: "Cancel",
    windowWidth: 963,
  }


  @Output() closeClick = new EventEmitter()
  @Output() submitClick = new EventEmitter()
}

export interface ModalWindowData{
  title: string,
  submit: string,
  cancel: string,
  windowWidth: number,
}