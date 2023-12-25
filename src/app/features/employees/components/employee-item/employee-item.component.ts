import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  EmployeesNavItem,
  EmployeesNavigator,
} from '../../navigation/employees-navigator';

@Component({
  selector: 'app-core-employee-item',
  templateUrl: './employee-item.component.html',
})
export class EmployeeItemComponent {
  isHovered = false;
  isMenuActive = false;
  name: string[] = [];

  @Input() public employee: EmployeeItemEntity = {
    id: -1,
    img: '',
    name: 'Not Found',
    mail: 'not-found@mail.ru',
    isSelect: false,
  };
  @Input() public highlightedPart: string = '';
  @Input() public offset: number = 0;

  @Output() clicked = new EventEmitter<EmployeeItemEntity>();
  @Output() ctrlClicked = new EventEmitter<EmployeeItemEntity>();
  @Output() deleteClicked = new EventEmitter<EmployeeItemEntity>();

  constructor(private navigator: EmployeesNavigator) {}

  ngOnChanges() {
    this.getName();
  }

  getName() {
    if (this.highlightedPart.length != 0) {
      this.name.push(
        this.employee.name.slice(
          0,
          this.employee.name.indexOf(this.highlightedPart),
        ),
      );
      this.name.push(this.highlightedPart);
      this.name.push(
        this.employee.name.slice(
          this.employee.name.indexOf(this.highlightedPart) +
            this.highlightedPart.length,
        ),
      );
    } else {
      this.name.push(this.employee.name);
    }
  }

  editEmployee() {
    this.navigator.showContent({
      navItem: EmployeesNavItem.EDIT_EMPLOYEE,
      params: this.employee.id.toString(),
      data:{}
    });
  }

  onClick(event: any) {
    if (event.ctrlKey) {
      this.ctrlClicked.emit(this.employee);
    } else {
      this.clicked.emit(this.employee);
    }
  }

  getMarginOffset() {
    if (this.employee.isSelect) {
      return 0 + 'px';
    } else {
      return this.offset + 'px';
    }
  }

  getPaddingOffset() {
    if (this.employee.isSelect) {
      return this.offset + 8 + 'px';
    } else {
      return 8 + 'px';
    }
  }

  onMouseOver() {
    this.isHovered = true;
  }

  onMouseOut() {
    this.isHovered = false;
  }

  onToggleMenu(value: boolean) {
    this.isMenuActive = value;
  }

  strings = {
    actions: {
      edit: 'Редактировать',
      move: 'Переместить в другой отдел',
      delete: 'Удалить',
    },
  };
}

export interface EmployeeItemEntity {
  id: number;
  img: string;
  name: string;
  mail: string;
  isSelect: boolean;
}
