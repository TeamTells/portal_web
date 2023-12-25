import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalWindowData } from '../modal-window/modal-window.component';
import { EmployeeItemEntity } from '../employee-item/employee-item.component';
import { ToastsService } from 'src/app/core/components/toast-alert/services/toast-alert.service';
import { ToastState } from 'src/app/core/components/toast-alert/toast-alert.component';

@Component({
  selector: 'delete-emoloyee-modal-window',
  templateUrl: './delete-emoloyee-modal.component.html',
})

export class DeleteEmployeeModal {

  @Input() employees: EmployeeItemEntity[] = [
    {id: 100, img: "", name: "Кирилл Сергеевич", mail: "", isSelect: false}
  ]

  public contentString: string = ""

  @Output() closeClicked = new EventEmitter()
  @Output() submitClicked = new EventEmitter<EmployeeItemEntity>()

  strings = {
    title1: "Удалить пользователя?",
    title2: "Удалить пользователей?",
    change: "Удалить",
    cancel: "Отмена"
  }

  public modalWindowData: ModalWindowData

  constructor() {

    this.modalWindowData = {
      title: this.employees.length == 1 ? this.strings.title1 : this.strings.title2,
      submit: this.strings.change,
      cancel: this.strings.cancel,
      windowWidth: 713,
    }
    if (this.employees.length == 1) {
      this.contentString = "После подтвержедния этого действия пользователь " + this.employees[0].name + " будет удален."
    }
    else {
      this.contentString = "После подтверждения этого действия несколько пользователей(" + this.employees.length + ") будут удалены, включая "
      this.employees.forEach((element, i) => {
        this.contentString += element.name
        if (i + 1 == this.employees.length) { this.contentString += '.' }
        else { this.contentString += ', ' }
      });
    }
  }
}