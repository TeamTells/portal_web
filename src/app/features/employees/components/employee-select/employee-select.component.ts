import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { EmployeesDataService } from '../../data/employees-data-service';
import { EmployeeItemEntity } from '../employee-item/employee-item.component';
import { Store } from 'src/app/core/mvi/store';
import { EmployeeSelectState } from './state/employee-select-state';
import { EmployeeSelectResultAction } from './state/employee-select-result-action';
import { EmployeeSelectExecutor } from './state/employee-select-executor';
import { EmployeeSelectAction, EmployeeSelectActionTypes } from './state/employee-select-action';
import { EmployeeSelectReducer } from './state/employee-select-reducer';
import { EmployeeSelectSettings, CountType, ClickType } from './interfaces/employee-select-settings';
import { DepartmentEntity } from '../department/department.component';

@Component({
  selector: 'employees-select',
  templateUrl: './employee-select.component.html'
})

export class EmployeeSelectComponent extends Store<EmployeeSelectState, EmployeeSelectExecutor, EmployeeSelectAction, EmployeeSelectResultAction>{

  @Input() public settings: EmployeeSelectSettings = {
    toolsVisible: true,
    blueBoxVisible: true,
    countType: CountType.Multiple,
    clickType: ClickType.CtrlClicked
  }
  @Output() public selectClicked = new EventEmitter<EmployeeItemEntity[]>

  strings = {
    selected: "выбрано"
  }

  protected readonly EmployeeSelectActionTypes = EmployeeSelectActionTypes;

  constructor(
    state: EmployeeSelectState,
    executor: EmployeeSelectExecutor,
    reducer: EmployeeSelectReducer,
    private data: EmployeesDataService
  ) {
    super(state, executor, reducer);
    this.performAction({
      type: EmployeeSelectActionTypes.INIT_DATA,
      settings: this.settings,
      employees: data.ConvertToEmployeeItemEntityList(data.employees),
      departments: data.ConvertToDepartmentEntityList(data.departments)
    })
  }
  
  ngOnChanges()
  {
    this.performAction({
      type: EmployeeSelectActionTypes.INIT_DATA,
      settings: this.settings,
      employees: this.data.ConvertToEmployeeItemEntityList(this.data.employees),
      departments: this.data.ConvertToDepartmentEntityList(this.data.departments)
    })
  }

  selectEmployee(employee: EmployeeItemEntity): void {
    this.performAction({
      type: EmployeeSelectActionTypes.SELECT_EMPLOYEE,
      employee: employee
    })
    this.selectClicked.emit(this.getSelected())
  }

  departmentClicked(department: DepartmentEntity): void
  {
    if(this.state.settings.clickType == ClickType.Clicked)
    {
      this.performAction({
        type: EmployeeSelectActionTypes.SELECT_DEPARTMENT,
        department: department
      })
    }
    else
    {
      this.performAction({
        type: EmployeeSelectActionTypes.ROUTE_TO_DEPARTMENT,
        id: department.id
      })
    }
  }

  departmentCtrlClicked(department: DepartmentEntity): void
  {
    if(this.state.settings.clickType == ClickType.CtrlClicked)
    {
      this.performAction({
        type: EmployeeSelectActionTypes.SELECT_DEPARTMENT,
        department: department
      })
    }
  }

  employeeClicked(employee: EmployeeItemEntity): void
  {
    if(this.state.settings.clickType == ClickType.Clicked)
    {
      this.selectEmployee(employee)
    }
  }

  employeeCtrlClicked(employee: EmployeeItemEntity): void
  {
    if(this.state.settings.clickType == ClickType.CtrlClicked)
    {
      this.selectEmployee(employee)
    }
  }

  getSelected(): EmployeeItemEntity[]
  {
    let result: EmployeeItemEntity[] = []

    this.state.employees.forEach((element) => {
      if(element.isSelect){
        result.push(element)
      }
    })

    return result.concat(this.getSelectedInDepartments(this.state.departments));
  }

  getSelectedInDepartments(departments: DepartmentEntity[]): EmployeeItemEntity[]{
    let result: EmployeeItemEntity[] = []

    departments.forEach((dep) => {
      dep.employees.forEach((element) => {
        if(element.isSelect){
          result.push(element)
        }
      })
      dep.departments.forEach((element) => {
        result.concat(this.getSelectedInDepartments(element.departments)) 
      })
    })

    return result;
  }
}