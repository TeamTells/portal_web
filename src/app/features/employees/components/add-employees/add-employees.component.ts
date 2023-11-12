import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-core-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})

export class AddEmployeesComponent {
  @Output() public buttonClick = new EventEmitter();

  onClick(): void
  {
    this.buttonClick.emit();
  }

  strings = {
    addEmployees: "Добавить сотрудников"
  }
}