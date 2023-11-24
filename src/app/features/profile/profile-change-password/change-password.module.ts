import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileChangePasswordComponent } from './presentation/view/profile-change-password.component';
import { ComponentsModule } from 'src/app/core/components/components.module';

@NgModule({
  declarations: [
    ProfileChangePasswordComponent,
  ],
  exports: [
    ProfileChangePasswordComponent,
  ],
  imports: [
    ComponentsModule,
    CommonModule,
  ],
  providers:[], 
})
export class ChangePasswordModule { }
