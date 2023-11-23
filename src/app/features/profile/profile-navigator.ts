import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

export enum ProfileNavItem{
    INFO,
    SECURITY,
    CHANGE_PASSWORD,
}
// TODO: возможно не имеет смысла
export interface ProfileNavEntity{
    navItem: ProfileNavItem,
    params: string,
}

@Injectable({
    providedIn: 'root'
})
export class ProfileNavigator {

constructor( private router: Router) {
}

public showContent(item: ProfileNavEntity)
{
    switch (item.navItem) {
    case ProfileNavItem.INFO:
        this.router.navigate(['profile']);
        break;
    case ProfileNavItem.SECURITY:
        this.router.navigate(['profile/security']);
        break;
    case ProfileNavItem.CHANGE_PASSWORD:
        this.router.navigate(['profile/change-password']);
        break;
    }
}
}