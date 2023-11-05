import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class FakeSectionEntity{
    data = {
        sections:[
            {id:1, title:'Программирование и разработка ПО',picture:'🐠'},
            {id:2, title:'Правила поведения в нашей столовой',picture:'🍔'},
            {id:3,title:'Списки проведение спортивных занятий',picture:'🥎'}
        ],
        pages:[
           {id:1,title:'Паттерны проектирование', isFavorite:true,},
           {id:2, title:'Строитель', isFavorite:false},
           {id:3,title:'Наблюдатель', isFavorite:false},
           {id:4, title:'Основы проиграммирование', isFavorite: false},
           {id:5, title:'Основы веб разработки', isFavorite:false} 
        ]
    };

    constructor(){}


    //Getting data from fake imitation server serctions, pages
    getSections():Observable<any>{
        return of(this.data.sections)
    }
    getPages():Observable<any>{
        return of(this.data.pages);
    }
    getSectionById(id: number):Observable<any>{
        return of(this.data.sections.find((element) => element.id = id))
    }
    getPageById():Observable<any>{
        return of(this.data.pages)
    }

}