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

  @Input() public employee: EmployeeEntity = {
    id: -1,
    img: "",
    name: "Not Found",
    mail: "not-found@mail.ru",
  };

  @Input() public offset: number = 0

  @Output() ctrlClicked = new EventEmitter<EmployeeEntity>();

  isSelected: boolean = false;

  onClick(event: any): void
  {
    if (event.ctrlKey)
    {
      this.ctrlClicked.emit(this.employee)
    }
  }

  getMarginOffset(): string
  {
    this.isSelected = this.data.selectedEmployees.indexOf(this.employee) >= 0
    
    if(this.isSelected)
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
    if(this.isSelected)
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

export interface EmployeeEntity{
  id: number,
  img: string,
  name: string,
  mail: string
}