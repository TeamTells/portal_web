import { Component, OnInit } from '@angular/core';
import { FakeSectionService } from '../state/section.service';
import { Router } from '@angular/router';
import { SectionsNavigator } from '../navigation/sections.navigator';
@Component({
  selector: 'app-presentation',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  sectionItem:any;

  constructor(private fakeSectionService:FakeSectionService ,private navigator:SectionsNavigator){}


  ngOnInit(): void {
      this.fakeSectionService.getSections().subscribe(
        data => {
          this.sectionItem = data;
        }
      )
  }

    toSection(id: number){
          this.navigator.navigateToSection(id);      
    }

}
