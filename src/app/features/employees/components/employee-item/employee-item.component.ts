import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeesDataService } from '../../data/employees-data-service';
@Component({
  selector: 'app-core-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent {
  constructor(private data: EmployeesDataService){}

  showDots: boolean = false;

  @Input() public employee: EmployeeItemEntity = {
    id: -1,
    img: "",
    name: "Not Found",
    mail: "not-found@mail.ru",
    isSelect: false
  };

  @Input() public offset: number = 0

  @Output() ctrlClicked = new EventEmitter<EmployeeItemEntity>();

  onClick(event: any): void
  {
    if (event.ctrlKey)
    {
      this.ctrlClicked.emit(this.employee)
    }
  }

  getMarginOffset(): string
  {
    if(this.employee.isSelect)
    {
      return 0 + 'px'
    }
    else
    {
      return this.offset + 'px'
    }
  }

  getPaddingOffset(): string
  {
    if(this.employee.isSelect)
    {
      return (this.offset + 8) + 'px'
    }
    else
    {
      return 8 + 'px'
    }
  }

  onMouseOver(): void
  {
    this.showDots = true;
  }

  onMouseOut(): void
  {
    this.showDots = false;
  }
}

export interface EmployeeItemEntity{
  id: number,
  img: string,
  name: string,
  mail: string
  isSelect: boolean
}