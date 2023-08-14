import { Component } from '@angular/core';
import {AuthService} from "./features/authorization/domain/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(authService: AuthService) {

  }

}
