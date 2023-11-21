import { Inject, Injectable } from '@angular/core';
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
import { Validator } from 'src/app/core/validators/validator';

@Injectable({
  providedIn: 'root',
})
export class DepartmentNewExecutor extends Executor<
  DepartmentNewState,
  DepartmentNewAction,
  DepartmentNewResultAction
> {
  constructor(
    @Inject('NewDepartmentNameValidator') private nameValidator: Validator,
  ) {
    super();
  }

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
          // TODO: idk но надо что-то с этим сделать
          supervisor: {
            id: +action.supervisorId,
            mail: '',
            name: action.supervisorId,
            img: '',
          },
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
          // TODO: idk но надо что-то с этим сделать
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

      case DepartmentNewActionTypes.REMOVE_EMPOYEES:
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
        type: DepartmentNewResultActionTypes.VALIDATION_ERROR,
        nameError: nameError != null ? nameError : '',
        parentDepartmentError:
          parentDepartmentError != null ? parentDepartmentError : '',
        supervisorError: supervisorError != null ? supervisorError : '',
      });
      return;
    }

    // Успех. Все валлидно 👻
    console.log(this.getState());
  }
}
