import {Component, OnInit} from '@angular/core';
import {SectionsNavigator} from '../navigation/sections.navigator';
import {SectionService} from "../domain/section-service";
import {SectionEntity} from "../domain/section-entity";
import {AuthorizationActionTypes} from "../../authorization/presentation/state/authorization-action";

@Component({
    selector: 'app-presentation',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

    sections: Array<SectionEntity> = []

    constructor(private sectionRepository: SectionService, private navigator: SectionsNavigator) {
    }

    ngOnInit(): void {
        this.sectionRepository.getSections().subscribe(sections => {
            this.sections = sections
        })
    }

    toSection(id: number) {
        this.navigator.navigateToSection(id);
    }

    protected readonly AuthorizationActionTypes = AuthorizationActionTypes;
}
