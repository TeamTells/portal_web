import { Injectable } from '@angular/core';
import { Reducer } from 'src/app/core/mvi/store';
import { DepartmentEditState } from './department-edit-state';
import {
  DepartmentEditResultAction,
  DepartmentEditResultActionTypes,
} from './department-edit-result-action';
import { clone } from 'cloneable-ts';

@Injectable({
  providedIn: 'root',
})
export class DepartmentEditReducer
  implements Reducer<DepartmentEditState, DepartmentEditResultAction>
{
  reduce(
    state: DepartmentEditState,
    action: DepartmentEditResultAction
  ): DepartmentEditState {
    switch (action.type) {
      case DepartmentEditResultActionTypes.CHANGE_NAME:
        return clone(state, {
          name: action.name,
          nameError: '',
        });

      case DepartmentEditResultActionTypes.CHANGE_SUPERVISOR:
        return clone(state, {
          supervisor: action.supervisor,
          supervisorError: '',
        });

      case DepartmentEditResultActionTypes.REMOVE_SUPERVISOR:
        return clone(state, {
          supervisor: null,
        });

      case DepartmentEditResultActionTypes.CHANGE_PARENT_DEPARTAMENT:
        return clone(state, {
          parentDepartment: action.parentDepartament,
          parentDepartmentError: '',
        });

      case DepartmentEditResultActionTypes.REMOVE_PARENT_DEPARTAMENT:
        return clone(state, { parentDepartment: null });

      case DepartmentEditResultActionTypes.ADD_EMLOYEES:
        return clone(state, {
          employees: [...state.employees, ...action.empoyees],
        });

      case DepartmentEditResultActionTypes.REMOVE_EMPOYESS:
        return clone(state, {
          employees: state.employees.filter(
            (a) => !action.empoyees.some((b) => a === b)
          ),
        });

      case DepartmentEditResultActionTypes.INITIALIZE:
        console.log(action.state);
        return clone(state, {
          ...action.state,
          nameError: '',
          parentDepartmentError: '',
          supervisorError: '',
        });

      case DepartmentEditResultActionTypes.VALIDATION_ERROR:
        return clone(state, {
          nameError: action.nameError,
          supervisorError: action.supervisorError,
          parentDepartmentError: action.parentDepartmentError,
        });
    }
  }
}
