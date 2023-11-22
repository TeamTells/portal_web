import { Injectable } from '@angular/core';
import { DropdownItem } from 'src/app/core/components/dropdown-field/dropdown-field.component';
import { DepartmentEntity } from '../../department/department.component';

@Injectable({
  providedIn: 'root',
})
export class EmployeeNewState {
  readonly firstName: string = '';
  readonly firstNameError: string = '';

  readonly lastName: string = '';
  readonly lastNameError: string = '';

  readonly patronymic: string = '';

  readonly dateOfBirth: string = '';
  readonly dateOfBirthErorr: string = '';

  readonly email: string = '';
  readonly emailError: string = '';

  readonly password: string = '';
  readonly passwordError: string = '';

  readonly department?: DepartmentEntity;

  readonly roles: DropdownItem[] = [
    { name: 'Читатель', id: '1' },
    { name: 'Редактор', id: '2' },
    { name: 'Администратор', id: '3' },
    { name: 'Владелец', id: '4' },
  ];
  readonly selectedRoles: DropdownItem[] = [{ name: 'Читатель', id: '1' }];

  readonly isLoading = false;
}
