export interface EmployeeEditDto
{
    firstName: string,
    secondName: string,
    surname: string,
    roles: number[],
    dateOfBirth: string,
    telephoneNumber: string,
    email: string,
    icon: string
    departmentID: number | null
}