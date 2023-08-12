import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationNavigator {

  constructor( private router: Router) {
  }

  openMainPage() {
    this.router.navigate(['']).then(r => "")
  }

}
