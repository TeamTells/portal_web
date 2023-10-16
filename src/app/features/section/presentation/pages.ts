export class Pages{
    id: number;
    title:string;
    isFavorite:boolean;

    constructor(id:number, title: string,isFavorite:boolean){
        this.id = id;
        this.title = title;
        this.isFavorite = isFavorite
    }

}