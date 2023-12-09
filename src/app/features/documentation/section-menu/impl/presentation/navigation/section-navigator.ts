import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SectionNavigator {

  constructor(private router: Router) {

  }


  openContent(sectionId: number) {
    this.router.navigate(['section', sectionId, "content"])
  }

  openSettings(sectionId: number) {
    this.router.navigate(['section', sectionId, "settings"])
  }

}
