import { Injectable } from '@angular/core';
import { DepartmentEntity } from '../../department/department.component';
import { EmployeeItemEntity } from '../../employee-item/employee-item.component'; 

@Injectable({
  providedIn: 'root',
})
export class DepartmentNewState {
  readonly name: string = '';
  readonly nameError: string = '';

  readonly supervisor: EmployeeItemEntity | null = null;
  readonly supervisorError: string = '';

  readonly parentDepartment: DepartmentEntity | null = null;
  readonly parentDepartmentError: string = '';

  readonly visibleSelectDepartmentModal: boolean = false;
  readonly visibleSelectEmployeesModal: boolean = false;
  readonly visibleSelectSupervisorModal: boolean = false;

  readonly employees: EmployeeItemEntity[] = [];
}
