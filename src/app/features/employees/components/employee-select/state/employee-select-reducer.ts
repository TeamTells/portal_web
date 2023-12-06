import { Reducer } from "src/app/core/mvi/store";
import {EmployeeSelectState} from "./employee-select-state";
import {EmployeeSelectResultAction, EmployeeSelectResultActionTypes} from "./employee-select-result-action";
import {Injectable} from "@angular/core";
import {clone} from "cloneable-ts";

@Injectable({
  providedIn: 'root'
})
export class EmployeeSelectReducer implements Reducer<EmployeeSelectState, EmployeeSelectResultAction> {

  reduce(state: EmployeeSelectState, action: EmployeeSelectResultAction): EmployeeSelectState {
    switch (action.type) {
      case EmployeeSelectResultActionTypes.INIT_DATA:
        return clone(state, {settings: action.settings, departments: action.departments, employees: action.employees})
      case EmployeeSelectResultActionTypes.SELECT:
        return clone(state, {selectedCount: action.selectCount, visibleTools: action.visible})
      case EmployeeSelectResultActionTypes.MOVE_TO_DEPARTMENT:
        return clone(state, {visibleChangeDepartmentModal: action.visible})
      default:
        return clone(state)
  }
  }
}
