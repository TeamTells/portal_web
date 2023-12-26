import {Injectable} from "@angular/core";
import { EmployeeItemEntity } from "../../employee-item/employee-item.component";
import { DepartmentEntity } from "../../department/department.component";
import { EmployeeSelectSettings, CountType, ClickType } from "../interfaces/employee-select-settings";
import { SearchEmployeeDepartmentData } from "../interfaces/search-employee-department-data";

@Injectable({
  providedIn: 'root'
})
export class EmployeeSelectState {
  readonly settings: EmployeeSelectSettings ={
    toolsVisible: true,
    blueBoxVisible: true,
    countType: CountType.Multiple,
    clickType: ClickType.CtrlClicked,
    overflowScroll: false
  }
  readonly isEditable: boolean = false
  readonly searchField: string = ''
  readonly employees: EmployeeItemEntity[] = []
  readonly departments: DepartmentEntity[] = []
  readonly searchDepartments: SearchEmployeeDepartmentData[] = []
  readonly selectedCount: number = 0
  readonly visibleTools: boolean = false
  readonly visibleChangeDepartmentModal: boolean = false
  readonly visibleDeleteModal: boolean = false
}
