import { Component } from '@angular/core';
import { Store } from 'src/app/core/mvi/store';
import { EmployeeEditState } from './state/employee-edit-state';
import { EmployeeEditExecutor } from './state/employee-edit-executor';
import {
  EmployeeEditAction,
  EmployeeEditActionTypes,
} from './state/employee-edit-action';
import { EmployeeEditResultAction } from './state/employee-edit-result-action';
import { EmployeeEditReducer } from './state/employee-edit-reducer';

@Component({
  selector: 'employee-edit',
  templateUrl: './employee-edit.component.html',
})
export class EmployeeEditComponent extends Store<
  EmployeeEditState,
  EmployeeEditExecutor,
  EmployeeEditAction,
  EmployeeEditResultAction
> {
  constructor(
    state: EmployeeEditState,
    executor: EmployeeEditExecutor,
    reducer: EmployeeEditReducer
  ) {
    super(state, executor, reducer);
  }

  protected readonly EmployeeEditActionTypes = EmployeeEditActionTypes;

  openSelectDepartment() {
    console.log('Open select department');
  }

  getSelectedDepartmentDropdownItem() {
    if (this.state.department) {
      return {
        id: this.state.department.id.toString(),
        name: this.state.department.name,
      };
    }

    return undefined;
  }

  getRolesDropdownItems() {
    if (this.state.selectedRoles) {
      return this.state.roles.map((role) => ({
        id: role.id.toString(),
        name: role.role.toString(),
      }));
    }

    return [];
  }

  getSelectedRolesDropdownItems() {
    if (this.state.selectedRoles) {
      return this.state.selectedRoles.map((role) => ({
        id: role.id.toString(),
        name: role.role.toString(),
      }));
    }

    return [];
  }
}
