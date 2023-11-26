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
    cancel: "Cancel"
  }

  @Output() closeClick = new EventEmitter()
  
}

export interface ModalWindowData{
  title: string,
  submit: string,
  cancel: string
}