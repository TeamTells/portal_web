import { Component, OnInit } from '@angular/core';
import { FakeSectionEntity } from '../state/sectionEntity';
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
  constructor(private router: Router, private FakesectionService:FakeSectionEntity){}


  ngOnInit(): void {
      this.FakesectionService.getSections().subscribe(
        data => {
          this.sectionItem = data;
          console.log(data)
        }
      )
  }


    navigateToSection(id: number){
      this.router.navigate(['/news', id]);
    }

}
