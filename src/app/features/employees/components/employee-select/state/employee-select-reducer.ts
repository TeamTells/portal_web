import { Reducer } from "src/app/core/mvi/store";
import { EmployeeSelectState } from "./employee-select-state";
import { EmployeeSelectResultAction, EmployeeSelectResultActionTypes } from "./employee-select-result-action";
import { Injectable } from "@angular/core";
import { clone } from "cloneable-ts";

@Injectable({
  providedIn: 'root'
})
export class EmployeeSelectReducer implements Reducer<EmployeeSelectState, EmployeeSelectResultAction> {

  reduce(state: EmployeeSelectState, action: EmployeeSelectResultAction): EmployeeSelectState {
    switch (action.type) {
      case EmployeeSelectResultActionTypes.INIT_DATA:
        return clone(state, {
          settings: action.settings,
          departments: action.departments,
          employees: action.employees,
          selectedCount: action.selectedCount,
          visibleTools: action.visibleTools,
          isEditable: action.isEditable
        })
      case EmployeeSelectResultActionTypes.SELECT:
        return clone(state, { selectedCount: action.selectCount, visibleTools: action.visible })
      case EmployeeSelectResultActionTypes.MOVE_TO_DEPARTMENT:
        return clone(state, { visibleChangeDepartmentModal: action.visible })
      case EmployeeSelectResultActionTypes.SEARCH_FIELD_CHANGE:
        return clone(state, { searchField: action.str, searchDepartments: action.searchDepartments })
      case EmployeeSelectResultActionTypes.UPDATE_DATA:
        return clone(state, {
          employees: action.employees,
          departments: action.departments,
          selectedCount: 0,
          visibleTools: false
        })
        default:
        return clone(state)
    }
  }
}
