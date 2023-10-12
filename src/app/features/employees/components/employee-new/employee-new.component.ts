import { Component } from '@angular/core';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeesNewComponent {
  onChangeName(name: string) {
    console.log('Твоё имя: ', name)
  }
}
