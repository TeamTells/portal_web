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
  ) {
    super(state, executor, reducer);
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
