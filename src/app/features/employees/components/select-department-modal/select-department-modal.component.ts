import { Component, EventEmitter, Output } from '@angular/core';
import { EmployeesDataService } from '../../data/employees-data-service';
import { DepartmentEntity } from '../department/department.component';
import { ModalWindowData } from '../modal-window/modal-window.component';

@Component({
  selector: 'select-department-modal-window',
  templateUrl: './select-department-modal.component.html',
})
export class SelectDepartmentModalComponent {
  @Output() closeClicked = new EventEmitter()

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
    cancel: this.strings.cancel
  }

  constructor(private dataService: EmployeesDataService){}

  selectDepartment(department: DepartmentEntity)
  {
    const i = this.departments.indexOf(department)
    this.selectedDepartment = department
    console.log(this.selectedDepartment)
    
    if (i != -1)
    {
      this.unselectAll(this.departments)
      this.departments[i].isSelect = true
    }
    else
    {
      this.departments.forEach((element)=> {
        this.selectChildDepartment(department, element.departments)
      })
    }
  }

  private selectChildDepartment(department: DepartmentEntity, departments: DepartmentEntity[])
  {
    const i = departments.indexOf(department)
    if (i != -1)
    {
      this.unselectAll(this.departments)
      departments[i].isSelect = true
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
  
}
