import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './employees.component.html',
})
export class EmployeesComponent {
  showDialog: boolean = false;

  onCrossClick() {
    this.showDialog = !this.showDialog;
  }
}
