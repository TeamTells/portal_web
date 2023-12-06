import {Component, OnInit} from '@angular/core';
import {SectionsNavigator} from '../../navigation/sections.navigator';
import {SectionService} from "../../../api/section-service";
import {SectionSummaryEntity} from "../../../api/section-summary-entity";
import {AuthorizationActionTypes} from "../../../../../authorization/presentation/state/authorization-action";
import {SectionsState} from "../state/sections-state";
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
            this.state = clone(this.state, {
                sections: sections, filteredSections: SectionsState.calculateFilteredSections(sections,
                    this.state.filtersState.filter, this.state.filtersState.onlyFavorite)
            })
        })
        this.sectionService.fetchSections()
    }

    onSectionChange(title: string) {
        this.state = clone(this.state, {
            createSectionState: clone(this.state.createSectionState, {title: title})
        })
    }

    onFilterChange(event: any) {
        const filter = event.target.value
        this.state = clone(this.state, {
            filtersState: clone(this.state.filtersState, {filter: filter}),
            filteredSections: SectionsState.calculateFilteredSections(this.state.sections,
                filter, this.state.filtersState.onlyFavorite)
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
        const section = new SectionSummaryEntity(
            SectionSummaryEntity.NO_ID,
            this.state.createSectionState.title,
            "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png",
            false
        )
        this.changeCreateSectionModalVisibility(false)
        this.sectionService.createSection(section)
    }

    onStarClicked(id: number) {
        let isFavoriteSection: boolean | null = null
        const newSections = this.state.sections.map(section => {
            if (section.id == id) {
                isFavoriteSection = !section.isFavorite
                return clone(section, {isFavorite: isFavoriteSection})
            } else {
                return section
            }
        })

        this.state = clone(this.state, {
            sections: newSections, filteredSections: SectionsState.calculateFilteredSections(
                newSections, this.state.filtersState.filter, this.state.filtersState.onlyFavorite)
        })

        if (isFavoriteSection != null) {
            this.sectionService.updateIsFavoriteSection(id, isFavoriteSection)
        }
    }

    changeFavoriteFilterState() {
        const newOnlyFavoriteFilter = !this.state.filtersState.onlyFavorite
        this.state = clone(this.state, {
            filtersState: clone(this.state.filtersState, {
                    onlyFavorite: newOnlyFavoriteFilter
                },
            ),
            filteredSections: SectionsState.calculateFilteredSections(
                this.state.sections, this.state.filtersState.filter, newOnlyFavoriteFilter)
        })
    }

    protected readonly AuthorizationActionTypes = AuthorizationActionTypes;
}
