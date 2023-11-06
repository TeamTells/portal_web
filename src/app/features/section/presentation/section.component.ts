import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SectionRepository} from "../../sections/domain/section-repository";


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  section: any;
  page: any;

  constructor(private route: ActivatedRoute, private sectionService: SectionRepository) {
    document.body.style.overflowY = 'hidden';
  }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params: any) => {
    //   const taskId = +params.get('id');
    //   this.fakeSectionService.getSectionById(taskId).subscribe(
    //     data => {
    //       this.section = data;
    //       console.log(data)
    //     }
    //   )
    // })
    // this.fakeSectionService.getPages().subscribe(
    //   newData => {
    //     this.page = newData
    //   }
    // )
  }

}
