import { Injectable } from '@angular/core';
import { EmployeeDto } from '../../../data/employees-data-service';
import { DepartmentNameDto } from '../../../data/dto/department-name-dto';
import { EmployeeItemEntity } from '../../employee-item/employee-item.component';

export interface IDepartmentEditState {
  readonly id: number
  readonly name: string;
  readonly supervisor: EmployeeDto | null;
  readonly parentDepartment: DepartmentNameDto | null;
  readonly employees: EmployeeItemEntity[];
}

@Injectable({
  providedIn: 'root',
})
export class DepartmentEditState implements IDepartmentEditState {
  readonly id: number = 0

  readonly name: string = '';
  readonly nameError: string = '';

  readonly supervisor: EmployeeDto | null = null;
  readonly supervisorError: string = '';

  readonly parentDepartment: DepartmentNameDto | null = null;
  readonly parentDepartmentError: string = '';

  readonly visibleSelectDepartmentModal: boolean = false;
  readonly visibleSelectEmployeesModal: boolean = false;
  readonly visibleSelectSupervisorModal: boolean = false;

  readonly employees: EmployeeItemEntity[] = [];
}
