import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeSectionEntity } from '../../sections/state/sectionEntity';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  section:any;
  page:any;

  constructor( private route: ActivatedRoute, private FakeSectionService: FakeSectionEntity){
    document.body.style.overflowY = 'hidden';
  }

  ngOnInit(): void {
        this.route.paramMap.subscribe((params:any) => {
          const taskId =+params.get('id');
          this.FakeSectionService.getSectionById(taskId).subscribe(
            data => {
              this.section = data;
              console.log(data)
            }
          )
        })
        this.FakeSectionService.getPages().subscribe(
           newData=> {
            this.page = newData
          }
        )
  }
    favoritePages!: any[];

    addToFavorite(page:any){
      page.isFavorite = true;
      this.favoritePages.push(page);
    }

}
