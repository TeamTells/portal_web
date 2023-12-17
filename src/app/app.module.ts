import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './core/components/components.module';
import { AuthorizationModule } from './features/authorization/authorization.module';
import { appInitializer } from './features/authorization/data/app-initializer';
import { AuthServiceImpl } from './features/authorization/data/auth-service-impl.service';
import { fakeBackendProvider } from './features/authorization/data/interceptors/fake-backend';
import { JwtInterceptor } from './features/authorization/data/interceptors/jwt-interceptor';
import { AuthService } from './features/authorization/domain/auth.service';
import { SectionModule } from './features/documentation/section-menu/impl/section.module';
import { SectionsModule } from './features/documentation/sections/impl/sections.module';
import { EditorModule2 } from './features/editor2/editor-module.module';
import { EmployeesModule } from './features/employees/employees.module';
import { MainModule } from './features/main/main.module';
import { NewPasswordModule } from './features/new-password/new-password.module';
import { ProfileModule } from './features/profile/profile.module';
import { RegistrationModule } from './features/registration/registration.module';
import { ResetPasswordModule } from './features/reset-password/reset-password.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorizationModule,
    EmployeesModule,
    MainModule,
    SectionsModule,
    ComponentsModule,
    RegistrationModule,
    ProfileModule,
    SectionModule,
    EditorModule2,
    ResetPasswordModule,
    NewPasswordModule,
  ],
  providers: [
    {
      provide: AuthService,
      useClass: AuthServiceImpl,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService],
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
