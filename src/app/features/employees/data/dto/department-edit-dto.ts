export interface DepartmentEditDto {
    name: string,
    supervisorID: number | null,
    parentDepartmentID: number | null
    employeeIDs: number[]
}