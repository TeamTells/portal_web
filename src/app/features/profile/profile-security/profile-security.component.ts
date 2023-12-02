import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-security',
  templateUrl: './profile-security.component.html',
})
export class ProfileSecurityComponent {
  
  constructor(private router: Router){
  }

  navigateToChangePassword(){
    this.router.navigate(['profile/change-password']);
  }
}
