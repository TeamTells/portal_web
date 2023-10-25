import { Component,OnInit } from '@angular/core';
import { Pages } from './pages';
import { ActivatedRoute } from '@angular/router';

import { SectionEntity } from '../../news/presentation/menuItem';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  section:any;
  page:any;

  constructor( private route: ActivatedRoute, private SectionService: SectionEntity){
    document.body.style.overflowY = 'hidden';
  }

  ngOnInit(): void {
        this.route.paramMap.subscribe((params:any) => {
          const taskId =+params.get('id');
          this.SectionService.getSectionById(taskId).subscribe(
            data => {
              this.section = data;
              console.log('data taked succsefully')
            }
          )
        })
        this.SectionService.getPages().subscribe(
          data => {
            this.page = data
          }
        )
  }

  favoritePages:Pages[] = [
    new Pages(1,'Паттерны прогрмаирование',true)
  ];

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
