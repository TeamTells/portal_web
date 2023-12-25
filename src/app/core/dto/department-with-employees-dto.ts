import { EmployeeFullDto } from "./employee-full-dto"

export interface DepartmentWithEmployeesDto{
    id: number
    name: string
    employees: EmployeeFullDto[]
    departments: DepartmentWithEmployeesDto[]
}