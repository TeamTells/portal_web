import { Injectable } from '@angular/core';
import { Executor } from 'src/app/core/mvi/store';
import {
  DepartmentNewAction,
  DepartmentNewActionTypes,
} from './department-new-action';
import { DepartmentNewState } from './department-new-state';
import {
  DepartmentNewResultAction,
  DepartmentNewResultActionTypes,
} from './department-new-result-action';

@Injectable({
  providedIn: 'root',
})
export class DepartmentNewExecutor extends Executor<
  DepartmentNewState,
  DepartmentNewAction,
  DepartmentNewResultAction
> {
  execute(action: DepartmentNewAction) {
    switch (action.type) {
      case DepartmentNewActionTypes.CHANGE_NAME:
        this.reduce({
          type: DepartmentNewResultActionTypes.CHANGE_NAME,
          name: action.name,
        });
        break;

      case DepartmentNewActionTypes.CHANGE_SUPERVISOR:
        this.reduce({
          type: DepartmentNewResultActionTypes.CHANGE_SUPERVISOR,
          supervisor: action.supervisor,
        });
        break;

      case DepartmentNewActionTypes.REMOVE_SUPERVISOR:
        this.reduce({
          type: DepartmentNewResultActionTypes.REMOVE_SUPERVISOR,
        });
        break;

      case DepartmentNewActionTypes.CHANGE_PARENT_DEPARTAMENT:
        this.reduce({
          type: DepartmentNewResultActionTypes.CHANGE_PARENT_DEPARTAMENT,
          parentDepartament: action.parentDepartament,
        });
        break;

      case DepartmentNewActionTypes.REMOVE_PARENT_DEPARTAMENT:
        this.reduce({
          type: DepartmentNewResultActionTypes.REMOVE_PARENT_DEPARTAMENT,
        });
        break;

      case DepartmentNewActionTypes.ADD_EMLOYEES:
        this.reduce({
          type: DepartmentNewResultActionTypes.ADD_EMLOYEES,
          empoyees: action.empoyees,
        });
        break;

      case DepartmentNewActionTypes.REMOVE_EMPOYESS:
        this.reduce({
          type: DepartmentNewResultActionTypes.REMOVE_EMPOYESS,
          empoyees: action.empoyees,
        });
        break;

      case DepartmentNewActionTypes.CREATE:
        this.handleCreate();
        break;
    }
  }

  private handleCreate() {
    const nameError = '';
    const parentDepartmentError = '';
    const supervisorError = '';

    if (
      nameError != null ||
      supervisorError != null ||
      parentDepartmentError != null
    ) {
      this.reduce({
        type: DepartmentNewResultActionTypes.VALIDATION_ERROR,
        nameError: nameError,
        parentDepartmentError: parentDepartmentError,
        supervisorError: supervisorError,
      });
      return;
    }

    // Успех. Все валлидно 👻
    console.log(this.getState());
  }
}
