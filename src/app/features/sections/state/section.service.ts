import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SectionEntity } from "./section-entity.model";
@Injectable({
    providedIn:'root'
})
export class FakeSectionService{
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
    //Getting data from fake imitation server serctions, pages in real api it will loks like this,but with http
    
    //GET METHODS
    getSections():Observable<any>{
        return of(this.data.sections)
    }
    getSectionById(id: number):Observable<any>{
        return of(this.data.sections.find((element) => element.id === id))
    }
    getPages():Observable<any>{
        return of(this.data.pages);
    }

}