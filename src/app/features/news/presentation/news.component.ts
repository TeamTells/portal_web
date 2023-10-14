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

    emojiToColorMap:{[emoji:string]: string} = {
      '🐠': 'bg-red-600',
      '🍔': 'bg-blue-1000',
      '🥎': 'bg-green-1000',
    }

    getEmoji(title:string){
      switch (title) {
        case 'Программирование и разработка ПО':
          return '🐠';
        case 'Правила поведения в нашей столовой':
          return '🍔';
        case 'Списки проведение спортивных занятий':
          return '🥎';
        default:
          return '';
      }
    }

}
