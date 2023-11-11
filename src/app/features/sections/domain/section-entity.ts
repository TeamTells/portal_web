export class SectionEntity {

    static NO_ID: number = -1

    constructor(
        readonly id: number,
        readonly title: string,
        readonly url: string
    ) {
    }

}
