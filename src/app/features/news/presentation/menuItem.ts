import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class SectionEntity{
    data = {
        section:[
            {id:1, title:'Программирование и разработка ПО'},
            {id:2, title:'Правила поведения в нашей столовой'},
            {id:3,title:'Списки проведение спортивных занятий'}
        ]
    };

    constructor(){}

    getUsers():Observable<any>{
        return of(this.data.section)
    }

}