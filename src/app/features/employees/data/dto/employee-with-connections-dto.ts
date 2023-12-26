import { CompanyDto } from "./company-dto";
import { DepartmentNameDto } from "./department-name-dto";
import { RoleDto } from "./role-dto";

export interface EmployeeWithConnectionsDto{
    id: number,
    firstName: string,
    secondtName: string,
    surname: string,
    dateOfBirth: Date,
    telephoneNumber: string,
    email: string,
    icon: string,
    company: CompanyDto,
    departments: DepartmentNameDto[],
    roles: RoleDto[]
}