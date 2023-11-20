import { Component, Input } from '@angular/core';
import { UnderlinedListProp } from '../underlined-list/underlined-list.component';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
})
export class ProfileInfoComponent {
  @Input()
  public workProp: UnderlinedListProp[] = [
    {
      image: "../../../../assets/buildings_columns_fill.svg",
      first: "Компания",
      second: "ООО Адванс",
    },
    {
      image: "../../../../assets/paperline_circle.svg",
      first: "Отдел",
      second: "Продвижение и развитие, Администрация",
    },
    {
      image: "../../../../assets/lump_desc_fill.svg",
      first: "Должность",
      second: "Системный аналитик, Руководитель направления разработки",
    },
  ];
  @Input()
  public  personalProp: UnderlinedListProp[] = [
    {
      image: "../../../../assets/birthday_cake.svg",
      first: "День рождения",
      second: "22 июня 2001г.",
    },
  ];
}
