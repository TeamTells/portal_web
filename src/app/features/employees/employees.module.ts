import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './presentation/view/employees.component';
import { EmployeeListItemComponent } from './presentation/view/components/employee-list-item/employee-list-item.component';



@NgModule({
    declarations: [
        EmployeesComponent,
        EmployeeListItemComponent
    ],
    exports: [
        EmployeesComponent,
        EmployeeListItemComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class EmployeesModule { }
