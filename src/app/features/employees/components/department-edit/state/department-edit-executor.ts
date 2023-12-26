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
import { DepartmentService } from '../../../data/department-service';
import { EmployeesNavItem, EmployeesNavigator } from '../../../navigation/employees-navigator';

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
    private departmentService: DepartmentService,
    private navigator: EmployeesNavigator
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
          supervisor: action.supervisor,
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
          parentDepartament: action.parentDepartament,
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

      case DepartmentEditActionTypes.INITIALIZE:
        this.reduce({
          type: DepartmentEditResultActionTypes.INITIALIZE,
          state: action.state,
        });
        break;
      case DepartmentEditActionTypes.INIT_FIELD:
        this.reduce({
          type: DepartmentEditResultActionTypes.INIT_FIELD,
          department: action.department,
        });
        break;
        case DepartmentEditActionTypes.OPEN_DEPARTAMENT_MODAL:
          this.reduce({
            type: DepartmentEditResultActionTypes.CHANGE_VISIBLE_DEPARTAMENT_MODAL,
            visible: true
          })  
          break;
  
        case DepartmentEditActionTypes.CLOSE_DEPARTAMENT_MODAL:
          this.reduce({
            type: DepartmentEditResultActionTypes.CHANGE_VISIBLE_DEPARTAMENT_MODAL,
            visible: false
          })
          break;
  
        case DepartmentEditActionTypes.OPEN_EMPLOYEES_MODAL:
          this.reduce({
            type: DepartmentEditResultActionTypes.CHANGE_VISIBLE_EMPLOYEES_MODAL,
            visible: true
          })  
          break;
  
        case DepartmentEditActionTypes.CLOSE_EMPLOYEES_MODAL:
          this.reduce({
            type: DepartmentEditResultActionTypes.CHANGE_VISIBLE_EMPLOYEES_MODAL,
            visible: false
          })
          break;
        case DepartmentEditActionTypes.OPEN_SUPERVISOR_MODAL:
          this.reduce({
            type: DepartmentEditResultActionTypes.CHANGE_VISIBLE_SUPERVISOR_MODAL,
            visible: true
          })  
          break;
        case DepartmentEditActionTypes.CLOSE_SUPERVISOR_MODAL:
          this.reduce({
            type: DepartmentEditResultActionTypes.CHANGE_VISIBLE_SUPERVISOR_MODAL,
            visible: false
          })
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

    if (
      nameError != null ||
      supervisorError != null 
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

    let state = this.getState()
    
    this.departmentService.editDepartment(state.id, {
      name: state.name,
      supervisorID: state.supervisor ? state.supervisor.id : null,
      parentDepartmentID: state.parentDepartment? state.parentDepartment.id : null,
      employeeIDs: state.employees.map((empl) => {
        return empl.id
      }),
    }).subscribe(()=>{
      this.navigator.showContent({
        navItem: EmployeesNavItem.USERS,
        params: '',
        ids: []
      })
    })
  }
}
