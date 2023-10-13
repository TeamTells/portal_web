import { Component } from '@angular/core';
import { MenuItem } from './menuItem';
@Component({
  selector: 'app-presentation',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

    menuItems: MenuItem[] = [
      new MenuItem('Программирование и разработка ПО'),
      new MenuItem('Правила поведения в нашей столовой'),
      new MenuItem('Списки проведение спортивных занятий'),
    ]

}
