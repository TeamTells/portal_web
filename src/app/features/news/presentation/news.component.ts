import { Component } from '@angular/core';
import { MenuItem } from './menuItem';
import { Router } from '@angular/router';
@Component({
  selector: 'app-presentation',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  constructor(private router: Router){}

    menuItems: MenuItem[] = [
      new MenuItem(1,'Программирование и разработка ПО'),
      new MenuItem(2,'Правила поведения в нашей столовой'),
      new MenuItem(3,'Списки проведение спортивных занятий'),
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

    navigateToSection(id: number){
      this.router.navigate(['/news', id]);
    }

    getmenuItemById(id:number):MenuItem | undefined{
      return this.menuItems.find((item) => item.id === id);
    }

}
