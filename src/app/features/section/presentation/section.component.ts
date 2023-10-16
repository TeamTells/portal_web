import { Component } from '@angular/core';
import { Pages } from './pages';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {

  constructor(){
    document.body.style.overflowY = 'hidden';
  }

  favoritePages:Pages[] = [
    new Pages(1,'Паттерны прогрмаирование')
  ];

    pageItem: Pages[] = [
        new Pages(1,'Паттерны проектирование'),
        new Pages(2,'Строитель'),
        new Pages(3,'Наблюдатель'),
        new Pages(4,'Основы проиграммирование'),
        new Pages(5, 'Основы веб разработки'),
    ]

    addToFavorite(page: Pages){
      this.favoritePages.push(page);
    }

}
