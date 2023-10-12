import { Component, Input } from '@angular/core';
import { IEmployee } from '../../interfaces/iemployee';

@Component({
  selector: 'app-core-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent {
  showDots: boolean = false;

  @Input() public employee: IEmployee = {
    id: -1,
    img: "",
    name: "Name",
    mail: "mail@mail.ru",
  };

  onMouseOver(): void
  {
    this.showDots = true;
  }

  onMouseOut(): void
  {
    this.showDots = false;
  }
}
