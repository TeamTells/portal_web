import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./features/main/presentation/main.component";
import {AuthorizationComponent} from "./features/authorization/presentation/view/authorization.component";
import {alreadyLoginGuardFunction, loginGuardFunction} from "./features/authorization/presentation/guard/auth-guard";
import {NewsComponent} from "./features/news/presentation/news.component";
import {EmployeesComponent} from "./features/employees/presentation/employees.component";
import {SettingsComponent} from "./features/settings/presentation/settings.component";

const mainItems: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'settings', component: SettingsComponent},
]

const appRoutes: Routes = [
  // {path: 'login', component: AuthorizationComponent, canActivate: [alreadyLoginGuardFunction]},

  {
    path: '',
    component: MainComponent,
    // canActivate: [loginGuardFunction],
    children: mainItems
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
