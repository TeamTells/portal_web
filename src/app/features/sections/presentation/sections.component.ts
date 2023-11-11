import {Component, OnInit} from '@angular/core';
import {SectionsNavigator} from '../navigation/sections.navigator';
import {SectionService} from "../domain/section-service";
import {SectionEntity} from "../domain/section-entity";
import {AuthorizationActionTypes} from "../../authorization/presentation/state/authorization-action";
import {SectionsState} from "./state/sections-state";
import {clone} from "cloneable-ts";

@Component({
    selector: 'app-presentation',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

    state: SectionsState = new SectionsState()

    constructor(private sectionService: SectionService, private navigator: SectionsNavigator) {
    }

    ngOnInit(): void {
        this.sectionService.sections.subscribe(sections => {
            this.state = clone(this.state, {sections: sections})
        })
        this.sectionService.fetchSections()
    }

    onSectionChange(title: string) {
        this.state = clone(this.state, {
            createSectionState: clone(this.state.createSectionState, {title: title})
        })
    }

    changeCreateSectionModalVisibility(isVisible: boolean) {
        this.state = clone(this.state, {
            createSectionState: clone(this.state.createSectionState, {isVisible: isVisible, title: ""})
        })
    }

    toSection(id: number) {
        this.navigator.navigateToSection(id);
    }

    createSection() {
        const section = new SectionEntity(SectionEntity.NO_ID, this.state.createSectionState.title, "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png")
        this.changeCreateSectionModalVisibility(false)
        this.sectionService.createSection(section)
    }

    protected readonly AuthorizationActionTypes = AuthorizationActionTypes;
}
