import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SectionsNavigator {
  constructor(private router: Router) {
  }

  navigateToSection(id: number) {
    console.log(id)
    this.router.navigate(['/section', id])
  }
}
