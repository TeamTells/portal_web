import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentNewComponent } from './presentation/view/department-new.component';
import { Validator } from 'src/app/core/validators/validator';
import {
  EmptyRule
} from 'src/app/core/validators/rule';
import { ComponentsModule } from 'src/app/core/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DepartmentNewComponent],
  imports: [CommonModule, ComponentsModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: 'NewDepartmentNameValidator',
      useExisting: Validator,
      useFactory: DepartmentNewNewModule.nameValidatorFactory,
    },
  ],
})
export class DepartmentNewNewModule {
  public static nameValidatorFactory = () =>
    new Validator([new EmptyRule('Введите название департамента')]);
}
