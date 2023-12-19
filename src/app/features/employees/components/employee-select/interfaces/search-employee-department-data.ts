import { EmployeeItemEntity } from "../../employee-item/employee-item.component";

export interface SearchEmployeeDepartmentData {
  deprtmentsStr: string,
  employees: EmployeeItemEntity[],
  searchStr: string
}