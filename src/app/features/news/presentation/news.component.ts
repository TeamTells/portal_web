import { Component, OnInit } from '@angular/core';
import { SectionEntity } from './menuItem';
import { Router } from '@angular/router';
@Component({
  selector: 'app-presentation',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  sectionItem:any;

  emojiToColorMap:{[emoji:string]: string} = {
    '🐠': 'bg-red-600',
    '🍔': 'bg-blue-1000',
    '🥎': 'bg-green-1000',
  }
  constructor(private router: Router, private sectionService:SectionEntity){}


  ngOnInit(): void {
      this.sectionService.getUsers().subscribe(
        data => {
          this.sectionItem = data;
          console.log(data)
        }
      )
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


}
