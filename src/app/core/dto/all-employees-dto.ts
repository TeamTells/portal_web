import { DepartmentWithEmployeesDto } from "./department-with-employees-dto"
import { EmployeeFullDto } from "./employee-full-dto"

export interface AllEmployeesDto{
    isEditable: boolean
    employees: EmployeeFullDto[]
    departments: DepartmentWithEmployeesDto[]
}