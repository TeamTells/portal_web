import { Component, OnInit } from '@angular/core';
import { FakeSectionEntity } from '../state/sectionEntity';
import { Router } from '@angular/router';
import { SectionsNavigator } from '../navigation/sections.navigator';
@Component({
  selector: 'app-presentation',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  sectionItem:any;

  emojiToColorMap:{[emoji:string]: string} = {
    '🐠': 'bg-red-600',
    '🍔': 'bg-blue-1000',
    '🥎': 'bg-green-1000',
  }
  constructor(private FakesectionService:FakeSectionEntity ,private navigator:SectionsNavigator){}


  ngOnInit(): void {
      this.FakesectionService.getSections().subscribe(
        data => {
          this.sectionItem = data;
        }
      )
  }

    toSection(id: number){
          this.navigator.navigateToSection(id);      
    }

}
