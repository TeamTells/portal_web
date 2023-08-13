import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthorizationModule} from "./features/authorization/authorization.module";
import {AuthService} from "./features/authorization/domain/auth.service";
import {AuthServiceImpl} from "./features/authorization/data/auth-service-impl.service";
import {JwtInterceptor} from "./features/authorization/data/interceptors/jwt-interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorizationModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {
      provide: AuthService,
      useClass: AuthServiceImpl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
