import {SectionEntity} from "../../domain/section-entity";

export class SectionsState {
    readonly sections: Array<SectionEntity> = []
    readonly createSectionState: CreateSectionState = new CreateSectionState()
}

export class CreateSectionState {
    readonly isVisible: boolean = false
    readonly title: string = ""
}
