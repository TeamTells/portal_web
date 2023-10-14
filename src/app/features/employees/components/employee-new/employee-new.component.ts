import { Component } from '@angular/core';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeesNewComponent {
  departments = [
    { name: 'Департамент прыжков по канату', id: '1' },
    { name: 'Департамент дрессировки', id: '2' },
    { name: 'Департамент клоунов', id: '3' },
  ]
  selectedDepartment?: {name: string, id: string};
  onSelectDepartment = (id: string) => {
    this.selectedDepartment = this.departments.find(department => department.id === id);
  }

  roles = [
    { name: 'Зритель', id: '1' },
    { name: 'Тамада', id: '2' },
    { name: 'Дрессировчик', id: '3' },
    { name: 'Клоун', id: '4' },
    { name: 'Акрабат', id: '4' },
  ]
  selectedRole?: {name: string, id: string};
  onSelectRole = (id: string) => {
    this.selectedRole = this.roles.find(role => role.id === id);
  }
  
  rights = [
    { name: 'Смотреть', id: '1' },
    { name: 'Выступать', id: '2' },
  ]
  selectedRight?: {name: string, id: string};
  onSelectRight = (id: string) => {
    this.selectedRight = this.rights.find(right => right.id === id);
  }

  onSave() {
    console.log('Save new user');
  }
}
