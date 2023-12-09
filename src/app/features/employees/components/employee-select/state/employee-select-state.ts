import {Injectable} from "@angular/core";
import { EmployeeItemEntity } from "../../employee-item/employee-item.component";
import { DepartmentEntity } from "../../department/department.component";
import { EmployeeSelectSettings, CountType, ClickType } from "../interfaces/employee-select-settings";

@Injectable({
  providedIn: 'root'
})
export class EmployeeSelectState {
  readonly settings: EmployeeSelectSettings ={
    toolsVisible: true,
    blueBoxVisible: true,
    countType: CountType.Multiple,
    clickType: ClickType.CtrlClicked
  }
  readonly employees: EmployeeItemEntity[] = []
  readonly departments: DepartmentEntity[] = []
  readonly selectedCount: number = 0
  readonly visibleTools: boolean = false
  readonly visibleChangeDepartmentModal: boolean = false
  readonly visibleDeleteModal: boolean = false
}
