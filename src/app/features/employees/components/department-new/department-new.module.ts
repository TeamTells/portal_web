import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentNewComponent } from './presentation/view/department-new.component';

@NgModule({
  declarations: [DepartmentNewComponent],
  imports: [CommonModule],
  exports: [DepartmentNewComponent],
})
export class DepartmentNewModule {}
