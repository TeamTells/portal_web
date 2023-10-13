import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  sections: any[] =[
    'Програмирование и разработка ПО',
    'Правила поведения в наше столовой',
    'Списки проведения спортивных занятий'
  ]

}
