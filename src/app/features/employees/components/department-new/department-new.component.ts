import { Component } from '@angular/core';
import { DepartmentNewState } from './state/department-new-state';
import { DepartmentNewExecutor } from './state/department-new-executor';
import {
  DepartmentNewAction,
  DepartmentNewActionTypes,
} from './state/department-new-action';
import { DepartmentNewResultAction } from './state/department-new-result-action';
import { Store } from 'src/app/core/mvi/store';
import { DepartmentNewReducer } from './state/department-new-reducer';
import { Location } from '@angular/common';
import { EmployeeService } from '../../data/employee-service';
import { Router } from '@angular/router';
import { EmployeesDataService } from '../../data/employees-data-service';

@Component({
  selector: 'department-new',
  templateUrl: './department-new.component.html',
})
export class DepartmentNewComponent extends Store<
  DepartmentNewState,
  DepartmentNewExecutor,
  DepartmentNewAction,
  DepartmentNewResultAction
> {
  constructor(
    state: DepartmentNewState,
    executor: DepartmentNewExecutor,
    reducer: DepartmentNewReducer,
    private router: Router,
    private dataService: EmployeesDataService,
    private employeeService: EmployeeService,
  ) {
    super(state, executor, reducer);

    let nav = this.router.getCurrentNavigation()
    if(nav)
    {
      if(nav.extras.state)
      {
        let ids = nav.extras.state['ids']
        if(this.isArrayOfnumber(ids))
        {
          employeeService.getEmployeesByIDs(ids).subscribe((empls)=> {
            this.performAction({
              type: DepartmentNewActionTypes.ADD_EMPLOYEES,
              employees: dataService.ConvertToEmployeeItemEntityList(empls)
            })
          })
        }
      }
    }
  }

  isArrayOfnumber  (value: unknown): value is number[] {
    return Array.isArray(value) 
        && value.every(item => typeof item === "number");
  }

  protected readonly DepartmentNewActionTypes = DepartmentNewActionTypes;

  searchStr = '';
  onChangeSearchStr(value: string) {
    this.searchStr = value;
  }

  addEmployees() {
    console.log('Add employees');
  }

  openSelectParentDepartment() {
    console.log('Open select parent department');
  }

  openSelectSipervisor() {
    console.log('Open select sipervisor');
  }

  getSelectedSipervisorDropdownItem() {
    if (this.state.supervisor) {
      return {
        id: this.state.supervisor.id.toString(),
        name: this.state.supervisor.name,
      };
    }

    return undefined;
  }

  getSelectedParentDepartmentDropdownItem() {
    if (this.state.parentDepartment) {
      return {
        id: this.state.parentDepartment.id.toString(),
        name: this.state.parentDepartment.name,
      };
    }

    return undefined;
  }
}
