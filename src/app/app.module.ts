import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationModule } from "./features/authorization/authorization.module";
import { AuthService } from "./features/authorization/domain/auth.service";
import { AuthServiceImpl } from "./features/authorization/data/auth-service-impl.service";
import { JwtInterceptor } from "./features/authorization/data/interceptors/jwt-interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { fakeBackendProvider } from "./features/authorization/data/interceptors/fake-backend";
import { appInitializer } from "./features/authorization/data/app-initializer";
import { MainModule } from "./features/main/main.module";
import { EmployeesModule } from './features/employees/employees.module';
import { ComponentsModule } from './core/components/components.module';
import {SectionsModule} from "./features/sections/impl/sections.module";
import {SectionModule} from "./features/section/impl/section.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorizationModule,
    EmployeesModule,
    MainModule,
    SectionsModule,
    ComponentsModule,
    SectionModule
  ],
  providers: [
    {
      provide: AuthService,
      useClass: AuthServiceImpl
    },
    {provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService]},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
