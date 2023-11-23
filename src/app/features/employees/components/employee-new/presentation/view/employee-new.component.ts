import { Component } from '@angular/core';
import { Store } from 'src/app/core/mvi/store';
import { EmployeeNewState } from '../state/employee-new-state';
import { EmployeeNewExecutor } from '../state/employee-new-executor';
import {
  EmployeeNewAction,
  EmployeeNewActionTypes,
} from '../state/employee-new-action';
import { EmployeeNewResultAction } from '../state/employee-new-result-action';
import { EmployeeNewReducer } from '../state/employee-new-reducer';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
})
export class EmployeesNewComponent extends Store<
  EmployeeNewState,
  EmployeeNewExecutor,
  EmployeeNewAction,
  EmployeeNewResultAction
> {
  constructor(
    state: EmployeeNewState,
    executor: EmployeeNewExecutor,
    reducer: EmployeeNewReducer
  ) {
    super(state, executor, reducer);
  }

  protected readonly EmployeeNewActionTypes = EmployeeNewActionTypes;
}
