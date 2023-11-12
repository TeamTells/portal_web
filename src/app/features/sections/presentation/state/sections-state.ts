import {SectionEntity} from "../../domain/section-entity";

export class SectionsState {
    readonly sections: Array<SectionEntity> = []
    readonly filteredSections: Array<SectionEntity> = []
    readonly createSectionState: CreateSectionState = new CreateSectionState()
    readonly filtersState: FiltersState = new FiltersState()

    static calculateFilteredSections(
        sections: Array<SectionEntity>,
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
