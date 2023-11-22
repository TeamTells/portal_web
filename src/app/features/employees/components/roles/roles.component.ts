import { Component, Input } from '@angular/core';
import { RoleEntity } from './role-item/role-item.component';

@Component({
  selector: 'roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent {
  @Input() roles: RoleEntity[] = [
    {
      id: 1,
      role: 'Владелец',
      description: 'Имеет полный доступ к управлению платформы',
    },
    {
      id: 2,
      role: 'Администратор',
      description: 'Имеет полный доступ к управлению платформы',
    },
    {
      id: 3,
      role: 'Редактор',
      description:
        'Имеет возможность создавать и редактировать новости в приложении, но не имеет полного доступа к управлению приложением',
    },
    {
      id: 4,
      role: 'Читатель',
      description:
        'Имеет возможность читать новости, оставлять под ними комментарии, проявлять эмоции',
    },
  ];
}
