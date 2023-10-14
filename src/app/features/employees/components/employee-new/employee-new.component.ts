import { Component } from '@angular/core';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeesNewComponent {
  dropdownItems = [
    {
      id: '1',
      name: 'Item 1'
    },
    {
      id: '2',
      name: 'Item 2'
    }, {
      id: "3",
      name: 'Item 3'
    }, {
      id: '4',
      name: 'Item 4'
    },
  ]

  selectedItem?: {
    id: string,
    name: string,
  } = {
      id: '1',
      name: 'Item 1'
    };

  onSelectItem = (id: string) => {
    this.selectedItem = this.dropdownItems.find(item => item.id === id);
  }

  onChangeName(name: string) {
    console.log('Твоё имя: ', name)
  }
}
