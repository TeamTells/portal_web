import { Component, Input, OnDestroy } from '@angular/core';
import { EmployeesDataService } from '../../data/employees-data-service';
import { DepartmentEntity } from '../department/department.component';
import { EmployeeItemEntity } from '../employee-item/employee-item.component';
import { Store } from 'src/app/core/mvi/store';
import { EmployeeSelectState } from './state/employee-select-state';
import { EmployeeSelectResultAction } from './state/employee-select-result-action';
import { EmployeeSelectExecutor } from './state/employee-select-executor';
import { EmployeeSelectAction, EmployeeSelectActionTypes } from './state/employee-select-action';
import { EmployeeSelectReducer } from './state/employee-select-reducer';
import { EmployeeSelectSettings, SelectCount } from './interfaces/employee-select-settings';

@Component({
  selector: 'employees-select',
  templateUrl: './employee-select.component.html'
})

export class EmployeeSelectComponent extends Store<EmployeeSelectState, EmployeeSelectExecutor, EmployeeSelectAction, EmployeeSelectResultAction>{

  constructor(
    state: EmployeeSelectState,
    executor: EmployeeSelectExecutor,
    reducer: EmployeeSelectReducer,
    private data: EmployeesDataService

  ) {
    super(state, executor, reducer);
    this.performAction({
      type: EmployeeSelectActionTypes.INIT_DATA,
      employees: data.ConvertToEmployeeItemEntityList(data.employees),
      departments: data.ConvertToDepartmentEntityList(data.departments)
    })
  }

  protected readonly EmployeeSelectActionTypes = EmployeeSelectActionTypes;

  @Input() public settings: EmployeeSelectSettings = {
    toolsVisible: true,
    blueBoxVisible: true,
    countType: SelectCount.Multiple
  }

  strings = {
    selected: "выбрано"
  }

  selectEmployee(employee: EmployeeItemEntity): void {
    this.performAction({
      type: EmployeeSelectActionTypes.SELECT_EMPLOYEE,
      employee: employee
    })
  }
}