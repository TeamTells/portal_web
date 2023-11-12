import {SectionEntity} from "../../domain/section-entity";

export class SectionsState {
    readonly sections: Array<SectionEntity> = []
    readonly createSectionState: CreateSectionState = new CreateSectionState()
    readonly filter: string = ""
    readonly filteredSections: Array<SectionEntity> = []

    static calculateSections(sections: Array<SectionEntity>, filter: string) {
        return sections.filter((section) => {
            return section.title.toLowerCase().includes(filter.toLowerCase())
        })
    }

}

export class CreateSectionState {
    readonly isVisible: boolean = false
    readonly title: string = ""
}
