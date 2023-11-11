import {Component, OnInit} from '@angular/core';
import {SectionsNavigator} from '../navigation/sections.navigator';
import {SectionService} from "../domain/section-service";
import {SectionEntity} from "../domain/section-entity";
import {AuthorizationActionTypes} from "../../authorization/presentation/state/authorization-action";
import {CreateSectionState, SectionsState} from "./state/sections-state";
import {clone} from "cloneable-ts";

@Component({
    selector: 'app-presentation',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

    state: SectionsState = new SectionsState()

    constructor(private sectionRepository: SectionService, private navigator: SectionsNavigator) {
    }

    ngOnInit(): void {
        this.sectionRepository.getSections().subscribe(sections => {
            this.state = clone(this.state, {sections: sections})
        })
    }

    onSectionChange(title: string) {
        this.state = clone(this.state, {
            createSectionState: clone(this.state.createSectionState, {title: title})
        })
    }

    changeCreateSectionModalVisibility(isVisible: boolean) {
        this.state = clone(this.state, {
            createSectionState: clone(this.state.createSectionState, {isVisible: isVisible})
        })
    }

    toSection(id: number) {
        this.navigator.navigateToSection(id);
    }

    protected readonly AuthorizationActionTypes = AuthorizationActionTypes;
}
