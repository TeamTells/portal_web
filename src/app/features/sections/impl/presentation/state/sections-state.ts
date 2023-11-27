import {SectionSummaryEntity} from "../../../api/section-summary-entity";

export class SectionsState {
    readonly sections: Array<SectionSummaryEntity> = []
    readonly filteredSections: Array<SectionSummaryEntity> = []
    readonly createSectionState: CreateSectionState = new CreateSectionState()
    readonly filtersState: FiltersState = new FiltersState()

    static calculateFilteredSections(
        sections: Array<SectionSummaryEntity>,
        filter: string,
        onlyFavorite: boolean
    ) {
        return sections.filter((section) => {
            let showWithFavorite = true
            if (onlyFavorite) {
                showWithFavorite = section.isFavorite
            }
            return section.title.toLowerCase().includes(filter.toLowerCase()) && showWithFavorite
        })
    }

}

export class CreateSectionState {
    readonly isVisible: boolean = false
    readonly title: string = ""
}

export class FiltersState {
    readonly filter: string = ""
    readonly onlyFavorite: boolean = false
}
