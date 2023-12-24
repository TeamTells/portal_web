import { DepartmentItemDto } from "./department-item-dto"

export interface DepartmentItemListDto{
    isEditable: boolean
    departments: DepartmentItemDto[]
}