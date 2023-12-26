import { MoveEmployeeDto } from "./move-employee-dto"

export interface MoveEmployeesDto
{
    idDepartmentTo: number
    employees: MoveEmployeeDto[]
}