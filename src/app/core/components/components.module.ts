import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { ButtonBackComponent } from './button-back/button-back.component';
import { ButtonLightGrayComponent } from './button-light-gray/button-light-gray.component';
import { ButtonRedComponent } from './button-red/button-red.component';
import { CardComponent } from './card/card.component';
import { CheckboxFieldComponent } from './checkbox-field/checkbox-field.component';
import { DropdownFieldComponent } from './dropdown-field/dropdown-field.component';
import { FieldErrorMessageComponent } from './field-error-message/field-error-message.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { MainContentCardComponent } from './main-content-card/main-content-card.component';
import { MultiselectFieldComponent } from './multiselect-field/multiselect-field.component';
import { PageShadingComponent } from './page-shading/page-shading.component';
import { PhoneNumberFieldComponent } from './phone-number-field/phone-number-field.component';
import { PopupMenuButtonComponent } from './popup-menu/popup-menu-button/popup-menu-button.component';
import { PopupMenuContentComponent } from './popup-menu/popup-menu-content/popup-menu-content.component';
import { PopupMenuOptionComponent } from './popup-menu/popup-menu-option/popup-menu-option.component';
import { PopupMenuComponent } from './popup-menu/popup-menu.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import {
  SvgBorderedArrow,
  SvgPlus,
  SvgSearch,
  SvgSuccess,
  SvgWarning,
  SvgXMark,
} from './svg-components/svg.components';
import { ErrorToastComponent } from './toast-alert/error-toast/error-toast.component';
import { SuccessToastComponent } from './toast-alert/success-toast/success-toast.component';
import { ToastComponent } from './toast-alert/toast-alert.component';

@NgModule({
  declarations: [
    CardComponent,
    MainContentCardComponent,
    ButtonRedComponent,
    ButtonBackComponent,
    InputFieldComponent,
    SearchFieldComponent,
    DropdownFieldComponent,
    FieldErrorMessageComponent,
    ButtonLightGrayComponent,
    PopupMenuComponent,
    PopupMenuButtonComponent,
    PopupMenuContentComponent,
    PopupMenuOptionComponent,
    PageShadingComponent,
    ToastComponent,
    ErrorToastComponent,
    SuccessToastComponent,
    MultiselectFieldComponent,
    CheckboxFieldComponent,
    AuthLayoutComponent,
    PhoneNumberFieldComponent,
  ],
  exports: [
    CardComponent,
    MainContentCardComponent,
    ButtonRedComponent,
    ButtonBackComponent,
    InputFieldComponent,
    SearchFieldComponent,
    DropdownFieldComponent,
    FieldErrorMessageComponent,
    ButtonLightGrayComponent,
    PopupMenuComponent,
    PopupMenuButtonComponent,
    PopupMenuContentComponent,
    PopupMenuOptionComponent,
    PageShadingComponent,
    ToastComponent,
    ErrorToastComponent,
    SuccessToastComponent,
    MultiselectFieldComponent,
    CheckboxFieldComponent,
    AuthLayoutComponent,
    PhoneNumberFieldComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxMaskDirective,
    SvgBorderedArrow,
    SvgPlus,
    SvgXMark,
    SvgWarning,
    SvgSearch,
    SvgSuccess,
  ],
  providers: [provideNgxMask()],
})
export class ComponentsModule {}
