import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-role-item',
  templateUrl: './role-item.component.html',
})
export class RoleItemComponent {
  @Input() class: string | string[] = [];

  @Input() public role: RoleEntity = {
    id: 1,
    role: 'Role',
    description: 'Description',
  };
}

export interface RoleEntity {
  id: number;
  role: String;
  description: String;
}
