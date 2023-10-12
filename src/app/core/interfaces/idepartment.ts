import { IEmployee } from "./iemployee";

export interface IDepartment{
    id: number,
    name: string,
    departments: IDepartment[],
    employees: IEmployee[]
} 