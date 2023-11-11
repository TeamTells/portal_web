export class SectionsResponseJson {

    constructor(
        readonly sections: Array<SectionJson>
    ) {
    }

}

export class SectionJson {

    constructor(
        readonly id: number,
        readonly title: string,
        readonly thumbnailUrl: string
    ) {
    }

}
