import { EmployeeWithConnectionsDto } from "./employee-with-connections-dto";

export interface EmployeeInfoDto{
    isEditable: boolean,
    employee: EmployeeWithConnectionsDto
}