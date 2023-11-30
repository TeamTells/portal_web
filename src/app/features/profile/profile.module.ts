import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { ProfileSecurityComponent } from './profile-security/profile-security.component';
import { UnderlinedListComponent } from './underlined-list/underlined-list.component';
import { ArrowIconComponent } from './arrow-icon/arrow-icon.component';
import { RouterOutlet } from '@angular/router';
import { MainModule } from '../main/main.module';
import { ComponentsModule } from 'src/app/core/components/components.module';
import { ProfileMenuItemComponent } from './profile-menu-item/profile-menu-item.component';
import { ProfileChangePasswordComponent } from './profile-change-password/presentation/view/profile-change-password.component';
import { ChangePasswordModule } from './profile-change-password/change-password.module';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileInfoComponent,
    ProfileMenuComponent,
    ProfileSecurityComponent,
    ProfileMenuItemComponent,
    UnderlinedListComponent,
    ArrowIconComponent,
  ],
  imports: [
    RouterOutlet,
    ComponentsModule,
    CommonModule,
    ChangePasswordModule,
  ]
})
export class ProfileModule { }
