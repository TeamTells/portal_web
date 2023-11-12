import {Injectable} from "@angular/core";
import {clone} from "cloneable-ts";
import { Reducer } from "src/app/core/mvi/store";
import { DepartmentState } from "./department-state";
import { DepartmentResultAction, DepartmentResultActionTypes } from "./department-result-action";

@Injectable({
    providedIn: 'root'
})
export class DepartmentReducer implements Reducer<DepartmentState, DepartmentResultAction> {

    reduce(state: DepartmentState, action: DepartmentResultAction): DepartmentState {
        switch (action.type) {
            case DepartmentResultActionTypes.GET_COUNT_EMPLOYEES:
                return clone(state, {countOfEmployees: action.countEmployees})

            case DepartmentResultActionTypes.CHANGE_VISIBILITY:
                return clone(state, {visibilityContent: action.visibilityContent})
        }
    }

}
