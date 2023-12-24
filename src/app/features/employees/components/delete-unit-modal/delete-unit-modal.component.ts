import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalWindowData } from '../modal-window/modal-window.component';
import { EmployeeItemEntity } from '../employee-item/employee-item.component';
import { ToastsService } from 'src/app/core/components/toast-alert/services/toast-alert.service';
import { ToastState } from 'src/app/core/components/toast-alert/toast-alert.component';
import { DepartmentComponent, DepartmentEntity } from '../department/department.component';

@Component({
    selector: 'delete-unit-modal-window',
    templateUrl: './delete-unit-modal.component.html',
  })

export class DeleteUnitModal {

    @Input()  departament!: DepartmentEntity

    @Output() closeClicked = new EventEmitter()
    @Output() submitClicked = new EventEmitter<EmployeeItemEntity>()

    strings = {
        title: "Удалить подразделение?",
        change: "Удалить",
        cancel: "Отмена"
      }
    
      public modalWindowData: ModalWindowData = {
        title: this.strings.title,
        submit: this.strings.change,
        cancel: this.strings.cancel,
        windowWidth: 713,
      }
}