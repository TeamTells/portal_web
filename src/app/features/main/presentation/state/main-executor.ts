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
    private router: Router,

  ) {
    super();
    router.navigate(['sections'])
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
      case MainActionTypes.SHOW_SIDEBAR:
        this.reduce({
          type: MainResultActionTypes.SHOW_SIDEBAR,
        })
        break
    }
  }

  private showPage(item: NavItem) {
    switch (item) {
      case NavItem.SECTIONS:
        this.router.navigate(['sections'])
        break
      case NavItem.EMPLOYEES:
        this.router.navigate(['employees'])
        break
      case NavItem.SETTINGS:
        this.router.navigate(['settings'])
        break
      case NavItem.PROFILE:
        this.reduce({
          type: MainResultActionTypes.SHOW_SIDEBAR,
        })
        this.router.navigate(['profile'])
    }
  }
}
