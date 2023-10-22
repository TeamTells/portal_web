import { DepartmentAction, DepartmentActionTypes } from "./department-action";
import { Injectable} from "@angular/core";
import { Executor } from "src/app/core/mvi/store";
import { DepartmentState } from "./department-state";
import { DepartmentResultAction, DepartmentResultActionTypes } from "./department-result-action";
import { EmployeesNavItem, EmployeesNavigator } from "../../../navigation/employees-navigator";
import { DepartmentEntity } from "../department.component";

@Injectable({
  providedIn: 'root'
})
export class DepartmentExecutor extends Executor<DepartmentState, DepartmentAction, DepartmentResultAction> {


  constructor(
    private navigator: EmployeesNavigator
  ) {
    super();
  }

  execute(action: DepartmentAction) {
    switch (action.type) {
      case DepartmentActionTypes.GO_TO_INFO:
        this.navigator.showContent({navItem: EmployeesNavItem.DEPARTMENT, params: action.id.toString()})
        break;

      case DepartmentActionTypes.CHANGE_VISIBILITY:
        this.reduce({
          type: DepartmentResultActionTypes.CHANGE_VISIBILITY,
          visibilityContent: !this.getState().visibilityContent
        })
        break;
      case DepartmentActionTypes.GET_COUNT_EMPLOYEES:
        this.reduce({
          type: DepartmentResultActionTypes.GET_COUNT_EMPLOYEES,
          countEmployees: this.getCountEmployees(action.department)
        })
        break;
    }
  }

  private getCountEmployees(folder: DepartmentEntity): number
  {
    let counter = folder.employees.length;
    folder.departments.forEach(element => {
      counter += this.getCountEmployees(element);
    });
    return counter;
  }

}
