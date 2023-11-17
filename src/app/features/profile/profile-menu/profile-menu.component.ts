import { Component } from '@angular/core';
import { ProfileNavItem, ProfileNavigator } from '../profile-navigator';
import { ProfileMenuItemEntity } from '../profile-menu-item/profile-menu-item.component';

export interface ProfileMenuEntity {
  icon: string;
  text: string;
  itemEntity: ProfileMenuItemEntity;
}

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
})
export class ProfileMenuComponent {
  constructor(private navigator: ProfileNavigator){};

  public onNavItemClick(item: ProfileNavItem): void {
    this.menuItems.forEach((element) => {
      element.itemEntity.type == item ? element.itemEntity.selected = true : element.itemEntity.selected = false
    });
    this.navigator.showContent({navItem: item, params: ""});
  }

  public menuItems: ProfileMenuEntity[] = [
    {
      icon: "../../../../../../../assets/menu-employees.svg",
      text: "Основное",
      itemEntity:{
        type:ProfileNavItem.INFO,
        selected: true,
      },
    },
    {
      icon: "../../../../../../../assets/shield.svg",
      text: "Безопасность",
      itemEntity:{
        type:ProfileNavItem.SECURITY,
        selected: false,
      },
    },
  ];

}
