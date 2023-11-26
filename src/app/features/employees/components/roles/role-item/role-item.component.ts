import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-role-item',
  templateUrl: './role-item.component.html',
  styleUrls: ['./role-item.component.scss']
})
export class RoleItemComponent {
  @Input() class: string | string[] = []; 
  
  @Input() public role: RoleEntity = {
    role: "Role",
    description: "Description"
  };
}

export interface RoleEntity{
  role: String;
  description: String;
}
