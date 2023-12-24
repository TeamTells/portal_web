import { Component, EventEmitter, Output } from '@angular/core';
import { EmployeesDataService } from '../../data/employees-data-service';
import { DepartmentEntity } from '../department/department.component';
import { ModalWindowData } from '../modal-window/modal-window.component';
import { ToastsService } from 'src/app/core/components/toast-alert/services/toast-alert.service';
import { ToastState } from 'src/app/core/components/toast-alert/toast-alert.component';

@Component({
  selector: 'select-department-modal-window',
  templateUrl: './select-department-modal.component.html',
})
export class SelectDepartmentModalComponent {
  @Output() closeClicked = new EventEmitter()
  @Output() submitClicked = new EventEmitter<DepartmentEntity>()

  public departments: DepartmentEntity[] = this.dataService.ConvertToDepartmentEntityList(this.dataService.departments)
  public selectedDepartment!: DepartmentEntity 
  
  strings = {
    title: "Выберите департамент",
    change: "Сменить",
    cancel: "Отмена"
  }

  public modalWindowData: ModalWindowData = {
    title: this.strings.title,
    submit: this.strings.change,
    cancel: this.strings.cancel,
    windowWidth: 963,
  }

  constructor(private dataService: EmployeesDataService, 
    private toastService: ToastsService){}

  selectDepartment(department: DepartmentEntity)
  {
    this.selectedDepartment = department
    
    this.selectChildDepartment(department, this.departments)
  }

  private selectChildDepartment(department: DepartmentEntity, departments: DepartmentEntity[])
  {
    const i = departments.indexOf(department)
    if (i != -1)
    {
      if(departments[i].isSelect)
      {
        departments[i].isSelect = false
      }
      else
      {
        this.unselectAll(this.departments)
        departments[i].isSelect = true
      }
    }
    else
    {
      departments.forEach((element)=> {
        this.selectChildDepartment(department, element.departments)
      })
    }
  }

  private unselectAll(departments: DepartmentEntity[])
  {
    departments.forEach((element)=> {
      element.isSelect = false
      this.unselectAll(element.departments)
    })
  }

  submitClick(): void
  {
    if(this.selectedDepartment)
    {
      this.submitClicked.emit(this.selectedDepartment)
    }
    else
    {
      this.toastService.createToast({
        title: "Департамент не выбран",
        description: "Пожалуйста выберите департамент",
        state: ToastState.SUCCESS //TODO Заменить на WARNING как появится
      })
    }
  }
}
