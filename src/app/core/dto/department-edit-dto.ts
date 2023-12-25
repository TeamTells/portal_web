export interface DepartmentEditDto {
    name: string,
    supervisorID: number,
    parentDepartmentID: number,
    employeeIDs: number[]
}