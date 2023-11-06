import {Component, OnInit} from '@angular/core';
import {SectionsNavigator} from '../navigation/sections.navigator';
import {SectionRepository} from "../domain/section-repository";
import {SectionEntity} from "../domain/section-entity";

@Component({
  selector: 'app-presentation',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  sections: Array<SectionEntity> = []

  constructor(private sectionRepository: SectionRepository, private navigator: SectionsNavigator) {
  }

  ngOnInit(): void {
    this.sections = this.sectionRepository.getSections()
  }

  toSection(id: number) {
    this.navigator.navigateToSection(id);
  }

}
