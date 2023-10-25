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
        ],
        pages:[
           {id:1,title:'Паттерны проектирование', isFavorite:true},
           {id:2, title:'Строитель', isFavorite:false},
           {id:3,title:'Наблюдатель', isFavorite:false},
           {id:4, title:'Основы проиграммирование', isFavorite: false},
           {id:5, title:'Основы веб разработки', isFavorite:false} 
        ]
    };

    constructor(){}

    getUsers():Observable<any>{
        return of(this.data.section)
    }
    getPages():Observable<any>{
        return of(this.data.pages);
    }

}