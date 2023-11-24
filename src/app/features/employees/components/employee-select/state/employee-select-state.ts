import {Injectable} from "@angular/core";
import { EmployeeItemEntity } from "../../employee-item/employee-item.component";
import { DepartmentEntity } from "../../department/department.component";

@Injectable({
  providedIn: 'root'
})
export class EmployeeSelectState {
  readonly employees: EmployeeItemEntity[] = []
  readonly departments: DepartmentEntity[] = []
  readonly selectedCount: number = 0
  readonly visibleTools: boolean = false
}
