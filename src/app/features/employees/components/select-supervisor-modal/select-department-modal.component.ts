import { Component, EventEmitter, Output } from '@angular/core';
import { ModalWindowData } from '../modal-window/modal-window.component';
import { ToastsService } from 'src/app/core/components/toast-alert/services/toast-alert.service';
import { ToastState } from 'src/app/core/components/toast-alert/toast-alert.component';
import { EmployeeItemEntity } from '../employee-item/employee-item.component';
import { EmployeeSelectSettings, CountType, ClickType } from '../employee-select/interfaces/employee-select-settings';

@Component({
  selector: 'select-supervisor-modal-window',
  templateUrl: './select-supervisor-modal.component.html',
})
export class SelectSupervisorModalComponent {
  @Output() closeClicked = new EventEmitter()
  @Output() submitClicked = new EventEmitter<EmployeeItemEntity>()

  constructor(private toastService: ToastsService){}

  public selectedEmployee: EmployeeItemEntity | null = null
  
  strings = {
    title: "Выберите руководителя",
    change: "Выбрать",
    cancel: "Отмена"
  }

  public settings: EmployeeSelectSettings = {
    toolsVisible: false,
    blueBoxVisible: true,
    countType: CountType.Single,
    clickType: ClickType.Clicked
  }

  public modalWindowData: ModalWindowData = {
    title: this.strings.title,
    submit: this.strings.change,
    cancel: this.strings.cancel
  }

  submitClick(): void
  {
    if(this.selectedEmployee)
    {
      this.submitClicked.emit(this.selectedEmployee)
    }
    else
    {
      this.toastService.createToast({
        title: "Руководитель не выбран",
        description: "Пожалуйста выберите руководителя",
        state: ToastState.ERROR //TODO Заменить на WARNING как появится
      })
    }
  }

  selectClick(employees: EmployeeItemEntity[]): void
  {
    if(employees.length != 0)
    {
      this.selectedEmployee = employees[0]
    }
    else
    {
      this.selectedEmployee = null
    }
  }
}
