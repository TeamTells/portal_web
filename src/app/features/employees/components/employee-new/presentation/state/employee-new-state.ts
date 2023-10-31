import { Injectable } from '@angular/core';
import { DropdownItem } from 'src/app/core/components/dropdown-field/dropdown-field.component';

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

  // TODO: заменить DropdownItem на DTO-шки
  readonly departments: DropdownItem[] = [
    { name: 'Департамент прыжков по канату', id: '1' },
    { name: 'Департамент дрессировки', id: '2' },
    { name: 'Департамент клоунов', id: '3' },
  ];
  readonly department?: DropdownItem;

  readonly roles: DropdownItem[] = [
    { name: 'Зритель', id: '1' },
    { name: 'Тамада', id: '2' },
    { name: 'Дрессировчик', id: '3' },
    { name: 'Клоун', id: '4' },
    { name: 'Акрабат', id: '4' },
  ];
  readonly role?: DropdownItem;

  readonly rights: DropdownItem[] = [
    { name: 'Смотреть', id: '1' },
    { name: 'Выступать', id: '2' },
  ];
  readonly right?: DropdownItem;

  readonly isLoading = false;
}
