import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeSectionEntity } from '../../news/state/sectionEntity';


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
              console.log('data taked succsefully')
            }
          )
        })
        this.FakeSectionService.getPages().subscribe(
          data => {
            this.page = data
          }
        )
  }
    favoritePages!: any[];

    addToFavorite(page:any){
      page.isFavorite = true;
      this.favoritePages.push(page);
    }

    emojiToColorMap:{[emoji:string]: string} = {
      '🐠': 'bg-red-600',
      '🍔': 'bg-blue-1000',
      '🥎': 'bg-green-1000',
    }

}
