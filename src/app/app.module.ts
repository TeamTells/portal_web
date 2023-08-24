import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthorizationModule} from "./features/authorization/authorization.module";
import {AuthService} from "./features/authorization/domain/auth.service";
import {AuthServiceImpl} from "./features/authorization/data/auth-service-impl.service";
import {JwtInterceptor} from "./features/authorization/data/interceptors/jwt-interceptor";
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {fakeBackendProvider} from "./features/authorization/data/interceptors/fake-backend";
import {appInitializer} from "./features/authorization/data/app-initializer";
import {MainModule} from "./features/main/main.module";
import {EditorComponent} from "./features/editor/presentation/editor/editor.component";
import {EditorModule} from "./features/editor/editor.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorizationModule,
    MainModule,
    EditorModule
  ],
  providers: [
    {
      provide: AuthService,
      useClass: AuthServiceImpl
    },
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
