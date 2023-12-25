import { Injectable } from '@angular/core';
import { Reducer } from 'src/app/core/mvi/store';
import { DepartmentNewState } from './department-new-state';
import {
  DepartmentNewResultAction,
  DepartmentNewResultActionTypes,
} from './department-new-result-action';
import { clone } from 'cloneable-ts';

@Injectable({
  providedIn: 'root',
})
export class DepartmentNewReducer
  implements Reducer<DepartmentNewState, DepartmentNewResultAction>
{
  reduce(
    state: DepartmentNewState,
    action: DepartmentNewResultAction
  ): DepartmentNewState {
    switch (action.type) {
      case DepartmentNewResultActionTypes.CHANGE_NAME:
        return clone(state, {
          name: action.name,
          nameError: '',
        });

      case DepartmentNewResultActionTypes.CHANGE_SUPERVISOR:
        return clone(state, {
          supervisor: action.supervisor,
          supervisorError: '',
          visibleSelectSupervisorModal: false
        });

      case DepartmentNewResultActionTypes.REMOVE_SUPERVISOR:
        return clone(state, {
          supervisor: null,
        });

      case DepartmentNewResultActionTypes.CHANGE_PARENT_DEPARTAMENT:
        return clone(state, {
          parentDepartment: action.parentDepartament,
          parentDepartmentError: '',
          visibleSelectDepartmentModal: false
        });

      case DepartmentNewResultActionTypes.REMOVE_PARENT_DEPARTAMENT:
        return clone(state, { parentDepartment: null });

      case DepartmentNewResultActionTypes.ADD_EMPLOYEES:
        return clone(state, {
          employees: action.employees,
          visibleSelectEmployeesModal: false
        });

      case DepartmentNewResultActionTypes.REMOVE_EMPLOYEES:
        return clone(state, {
          employees: state.employees.filter(
            (a) => !action.employees.some((b) => a === b)
          ),
        });

      case DepartmentNewResultActionTypes.VALIDATION_ERROR:
        return clone(state, {
          nameError: action.nameError,
          supervisorError: action.supervisorError,
          parentDepartmentError: action.parentDepartmentError,
        });
      case DepartmentNewResultActionTypes.CHANGE_VISIBLE_DEPARTAMENT_MODAL:
        return clone(state, {visibleSelectDepartmentModal: action.visible})
      case DepartmentNewResultActionTypes.CHANGE_VISIBLE_EMPLOYEES_MODAL:
        return clone(state, {visibleSelectEmployeesModal: action.visible})
      case DepartmentNewResultActionTypes.CHANGE_VISIBLE_SUPERVISOR_MODAL:
        return clone(state, {visibleSelectSupervisorModal: action.visible})
    }
  }
}
