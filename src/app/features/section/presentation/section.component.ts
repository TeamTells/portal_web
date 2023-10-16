import { Component,OnInit } from '@angular/core';
import { Pages } from './pages';
import { ActivatedRoute } from '@angular/router';

import { MenuItem } from '../../news/presentation/menuItem';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  menuItemId!: number;
  menuItemTitle!: string;

  menuItems: MenuItem[] = [ // Define your menuItems array here
    new MenuItem(1, 'Программирование и разработка ПО'),
    new MenuItem(2, 'Правила поведения в нашей столовой'),
    new MenuItem(3, 'Списки проведение спортивных занятий'),
  ];

  constructor( private route: ActivatedRoute,){
    document.body.style.overflowY = 'hidden';
  }

  ngOnInit(): void {
      this.route.params.subscribe((params)=>{
        this.menuItemId =+ params['id'];
        const selectedItem = this.menuItems.find((item) => item.id === this.menuItemId);
       
        if(selectedItem){
          this.menuItemTitle = selectedItem.title;
        }
        
      })
  }

  favoritePages:Pages[] = [
    new Pages(1,'Паттерны прогрмаирование',true)
  ];

    pageItem: Pages[] = [
        new Pages(1,'Паттерны проектирование',true),
        new Pages(2,'Строитель',false),
        new Pages(3,'Наблюдатель',false),
        new Pages(4,'Основы проиграммирование',false),
        new Pages(5, 'Основы веб разработки',false),
    ]

    addToFavorite(page: Pages){
      page.isFavorite = true;
      this.favoritePages.push(page);
    }

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
