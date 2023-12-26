import { DepartmentItemDto } from "./department-item-dto"

export interface AllDepartmentsDto{
    isEditable: boolean
    departments: DepartmentItemDto[]
}