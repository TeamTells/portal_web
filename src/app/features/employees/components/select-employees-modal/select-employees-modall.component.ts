import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ModalWindowData } from '../modal-window/modal-window.component';
import { ToastsService } from 'src/app/core/components/toast-alert/services/toast-alert.service';
import { ToastState } from 'src/app/core/components/toast-alert/toast-alert.component';
import { EmployeeItemEntity } from '../employee-item/employee-item.component';
import { EmployeeSelectSettings, CountType, ClickType } from '../employee-select/interfaces/employee-select-settings';
import { EmployeeDto } from '../../data/employees-data-service';

@Component({
  selector: 'select-employees-modal-window',
  templateUrl: './select-employees-modal.component.html',
})
export class SelectEmployeesModalComponent {
  @Input() addedEmployees: EmployeeDto[] = []

  @Output() closeClicked = new EventEmitter()
  @Output() submitClicked = new EventEmitter<EmployeeItemEntity[]>()

  public addedIds: number[] = []

  constructor(private toastService: ToastsService){}

  public selectedEmployees: EmployeeItemEntity[] = []
  
  strings = {
    title: "Выберите сотрудников",
    change: "Выбрать",
    cancel: "Отмена"
  }

  ngOnChanges(){
    this.addedIds = []
    this.addedEmployees.forEach((element)=>{
      this.addedIds.push(element.id)
    })
  }

  public settings: EmployeeSelectSettings = {
    toolsVisible: false,
    blueBoxVisible: true,
    countType: CountType.Multiple,
    clickType: ClickType.Clicked,
    overflowScroll: true
  }

  public modalWindowData: ModalWindowData = {
    title: this.strings.title,
    submit: this.strings.change,
    cancel: this.strings.cancel,
    windowWidth: 963
  }

  submitClick(): void
  {
    this.submitClicked.emit(this.selectedEmployees)
  }

  selectClick(employees: EmployeeItemEntity[]): void
  {
    this.selectedEmployees = employees
  }
}
