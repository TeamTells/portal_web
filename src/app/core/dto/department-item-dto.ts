export interface DepartmentItemDto{
    id: number
    name: string
    countofEmployees: number
    departments: DepartmentItemDto[]
}