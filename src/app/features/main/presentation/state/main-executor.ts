import {Executor} from "../../../../core/mvi/store";
import {MainState, NavItem} from "./main-state";
import {MainAction, MainActionTypes} from "./main-action";
import {MainResultAction, MainResultActionTypes} from "./main-result-action";
import {Injectable} from "@angular/core";
import {AuthService} from "../../../authorization/domain/auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MainExecutor extends Executor<MainState, MainAction, MainResultAction> {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    super();
    router.navigate(['news'])
  }

  execute(action: MainAction) {
    switch (action.type) {
      case MainActionTypes.SELECT_ITEM:
        this.reduce({
          type: MainResultActionTypes.SELECT_ITEM,
          item: action.item
        })
        this.showPage(action.item)
        break

      case MainActionTypes.LOGOUT:
        this.authService.logout()
        break
    }
  }

  private showPage(item: NavItem) {
    switch (item) {
      case NavItem.NEWS:
        this.router.navigate(['news'])
        break
      case NavItem.EMPLOYEES:
        console.log("sdf")
        this.router.navigate(['employees'])
        break
    }
  }

}
