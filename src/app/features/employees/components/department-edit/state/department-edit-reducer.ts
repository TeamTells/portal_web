import { Injectable } from '@angular/core';
import { Reducer } from 'src/app/core/mvi/store';
import { DepartmentEditState } from './department-edit-state';
import {
  DepartmentEditResultAction,
  DepartmentEditResultActionTypes,
} from './department-edit-result-action';
import { clone } from 'cloneable-ts';
import { EmployeesDataService } from '../../../data/employees-data-service';

@Injectable({
  providedIn: 'root',
})
export class DepartmentEditReducer
  implements Reducer<DepartmentEditState, DepartmentEditResultAction>
{
  constructor(private dataService:EmployeesDataService){}
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
          visibleSelectSupervisorModal: false
        });

      case DepartmentEditResultActionTypes.REMOVE_SUPERVISOR:
        return clone(state, {
          supervisor: null,
        });

      case DepartmentEditResultActionTypes.CHANGE_PARENT_DEPARTAMENT:
        return clone(state, {
          parentDepartment: action.parentDepartament,
          parentDepartmentError: '',
          visibleSelectDepartmentModal: false
        });

      case DepartmentEditResultActionTypes.REMOVE_PARENT_DEPARTAMENT:
        return clone(state, { parentDepartment: null });

      case DepartmentEditResultActionTypes.ADD_EMLOYEES:
        return clone(state, {
          employees: action.empoyees,
          visibleSelectEmployeesModal: false
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

      case DepartmentEditResultActionTypes.INIT_FIELD:
        return clone(state, {
          id: action.department.id,
          name: action.department.name,
          supervisor: action.department.supervisor? {
            id: action.department.supervisor.id,
            name: action.department.supervisor.name,
            mail: '',
            img: ''
          }: null,
          parentDepartment: action.department.parentDepartment ? {
            id: action.department.parentDepartment.id,
            name: action.department.parentDepartment.name
          }: null,
          employees: this.dataService.ConvertToEmployeeItemEntityList(action.department.employees)
        });
      case DepartmentEditResultActionTypes.CHANGE_VISIBLE_DEPARTAMENT_MODAL:
        return clone(state, {visibleSelectDepartmentModal: action.visible})
      case DepartmentEditResultActionTypes.CHANGE_VISIBLE_EMPLOYEES_MODAL:
        return clone(state, {visibleSelectEmployeesModal: action.visible})
      case DepartmentEditResultActionTypes.CHANGE_VISIBLE_SUPERVISOR_MODAL:
        return clone(state, {visibleSelectSupervisorModal: action.visible})
    }
  }
}
