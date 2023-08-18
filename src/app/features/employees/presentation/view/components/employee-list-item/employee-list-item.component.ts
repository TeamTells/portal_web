import { Component, Input } from '@angular/core';
import { EmployeeListItemViewModel } from "../../../viewModels/employeeListItemViewModel";
@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss']
})
export class EmployeeListItemComponent {

    readonly viewModel: EmployeeListItemViewModel = new EmployeeListItemViewModel("Дмитрий Воронин",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        "Мщкждфылоаф")
}
