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
import { DepartmentService } from '../../../data/department-service';
import { EmployeesNavItem, EmployeesNavigator } from '../../../navigation/employees-navigator';

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
    private departmentService: DepartmentService,
    private navigator: EmployeesNavigator
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
          supervisor: action.supervisor,
        });
        break;

      case DepartmentNewActionTypes.REMOVE_SUPERVISOR:
        this.reduce({
          type: DepartmentNewResultActionTypes.REMOVE_SUPERVISOR,
        });
        break;

      case DepartmentNewActionTypes.CHANGE_PARENT_DEPARTMENT:
        this.reduce({
          type: DepartmentNewResultActionTypes.CHANGE_PARENT_DEPARTAMENT,
          parentDepartament: action.parentDepartment
        });
        break;

      case DepartmentNewActionTypes.REMOVE_PARENT_DEPARTMENT:
        this.reduce({
          type: DepartmentNewResultActionTypes.REMOVE_PARENT_DEPARTAMENT,
        });
        break;

      case DepartmentNewActionTypes.ADD_EMPLOYEES:
        this.reduce({
          type: DepartmentNewResultActionTypes.ADD_EMPLOYEES,
          employees: action.employees,
        });
        break;

        case DepartmentNewActionTypes.REMOVE_EMPLOYEE:
          let employees = this.getState().employees
          let i = 0
          let findElement = employees.find((employee, j) => {
            if(employee.id == action.employee.id)
            {
              i = j
              return true
            }
            return false
          })
          if(findElement)
          {
            employees.splice(i, 1)
          }
          
          break;

      case DepartmentNewActionTypes.REMOVE_EMPLOYEES:
        this.reduce({
          type: DepartmentNewResultActionTypes.REMOVE_EMPLOYEES,
          employees: action.employees,
        });
        break;

      case DepartmentNewActionTypes.CREATE:
        this.handleCreate();
        break;

      case DepartmentNewActionTypes.OPEN_DEPARTAMENT_MODAL:
        this.reduce({
          type: DepartmentNewResultActionTypes.CHANGE_VISIBLE_DEPARTAMENT_MODAL,
          visible: true
        })  
        break;

      case DepartmentNewActionTypes.CLOSE_DEPARTAMENT_MODAL:
        this.reduce({
          type: DepartmentNewResultActionTypes.CHANGE_VISIBLE_DEPARTAMENT_MODAL,
          visible: false
        })
        break;

      case DepartmentNewActionTypes.OPEN_EMPLOYEES_MODAL:
        this.reduce({
          type: DepartmentNewResultActionTypes.CHANGE_VISIBLE_EMPLOYEES_MODAL,
          visible: true
        })  
        break;

      case DepartmentNewActionTypes.CLOSE_EMPLOYEES_MODAL:
        this.reduce({
          type: DepartmentNewResultActionTypes.CHANGE_VISIBLE_EMPLOYEES_MODAL,
          visible: false
        })
        break;
      case DepartmentNewActionTypes.OPEN_SUPERVISOR_MODAL:
        this.reduce({
          type: DepartmentNewResultActionTypes.CHANGE_VISIBLE_SUPERVISOR_MODAL,
          visible: true
        })  
        break;
      case DepartmentNewActionTypes.CLOSE_SUPERVISOR_MODAL:
        this.reduce({
          type: DepartmentNewResultActionTypes.CHANGE_VISIBLE_SUPERVISOR_MODAL,
          visible: false
        })
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

    if (
      nameError != null ||
      supervisorError != null
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

    let state = this.getState()

    this.departmentService.createDepartment({
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
