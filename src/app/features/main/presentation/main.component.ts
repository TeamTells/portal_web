import { Component } from '@angular/core';
import {AuthService} from "../../authorization/domain/auth.service";
import {AuthorizationActionTypes} from "../../authorization/presentation/state/authorization-action";

@Component({
  selector: 'app-presentation',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private authService: AuthService) {
  }

  logout() {
    this.authService.logout()
  }

  protected readonly AuthorizationActionTypes = AuthorizationActionTypes;
}
