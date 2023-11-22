import { Inject, Injectable } from '@angular/core';
import { Executor } from 'src/app/core/mvi/store';
import {
  DepartmentEditAction,
  DepartmentEditActionTypes,
} from './department-edit-action';
import { DepartmentEditState } from './department-edit-state';
import {
  DepartmentEditResultAction,
  DepartmentEditResultActionTypes,
} from './department-edit-result-action';
import { Validator } from 'src/app/core/validators/validator';

@Injectable({
  providedIn: 'root',
})
export class DepartmentEditExecutor extends Executor<
  DepartmentEditState,
  DepartmentEditAction,
  DepartmentEditResultAction
> {
  constructor(
    @Inject('NewDepartmentNameValidator') private nameValidator: Validator,
  ) {
    super();
  }

  execute(action: DepartmentEditAction) {
    switch (action.type) {
      case DepartmentEditActionTypes.CHANGE_NAME:
        this.reduce({
          type: DepartmentEditResultActionTypes.CHANGE_NAME,
          name: action.name,
        });
        break;

      case DepartmentEditActionTypes.CHANGE_SUPERVISOR:
        this.reduce({
          type: DepartmentEditResultActionTypes.CHANGE_SUPERVISOR,
          supervisor: {
            id: +action.supervisorId,
            mail: '',
            name: action.supervisorId,
            img: '',
          },
        });
        break;

      case DepartmentEditActionTypes.REMOVE_SUPERVISOR:
        this.reduce({
          type: DepartmentEditResultActionTypes.REMOVE_SUPERVISOR,
        });
        break;

      case DepartmentEditActionTypes.CHANGE_PARENT_DEPARTAMENT:
        this.reduce({
          type: DepartmentEditResultActionTypes.CHANGE_PARENT_DEPARTAMENT,
          parentDepartament: {
            departments: [],
            employees: [],
            id: +action.parentDepartamentId,
            name: '',
            supervisor: {
              id: 1,
              img: '',
              mail: '',
              name: '',
            },
          },
        });
        break;

      case DepartmentEditActionTypes.REMOVE_PARENT_DEPARTAMENT:
        this.reduce({
          type: DepartmentEditResultActionTypes.REMOVE_PARENT_DEPARTAMENT,
        });
        break;

      case DepartmentEditActionTypes.ADD_EMLOYEES:
        this.reduce({
          type: DepartmentEditResultActionTypes.ADD_EMLOYEES,
          empoyees: action.empoyees,
        });
        break;

      case DepartmentEditActionTypes.REMOVE_EMPOYEES:
        this.reduce({
          type: DepartmentEditResultActionTypes.REMOVE_EMPOYESS,
          empoyees: action.empoyees,
        });
        break;

      case DepartmentEditActionTypes.EDIT:
        this.handleEdit();
        break;
    }
  }

  private handleEdit() {
    const nameError = this.nameValidator.validate(this.getState().name);
    const parentDepartmentError = this.getState().parentDepartment
      ? null
      : 'Назначьте родительский департамент';
    const supervisorError = this.getState().supervisor
      ? null
      : 'Назначьте руководителя';

    console.log(this.getState());

    if (
      nameError != null ||
      supervisorError != null ||
      parentDepartmentError != null
    ) {
      this.reduce({
        type: DepartmentEditResultActionTypes.VALIDATION_ERROR,
        nameError: nameError != null ? nameError : '',
        parentDepartmentError:
          parentDepartmentError != null ? parentDepartmentError : '',
        supervisorError: supervisorError != null ? supervisorError : '',
      });
      return;
    }

    console.log(this.getState());
  }
}
