import { DepartmentNameDto } from "./department-name-dto"
import { EmployeeFullDto } from "./employee-full-dto"
import { EmployeeNameDto } from "./employee-name-dto"

export interface DepartmentFullDto{
    id: number
    name: string
    supervisor: EmployeeNameDto
    parentDepartment: DepartmentNameDto
    employees: EmployeeFullDto[]
    departments: DepartmentFullDto[]
}