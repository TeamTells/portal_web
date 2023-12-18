import {Component, Input} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  template:  `
    <ng-container *ngFor="let breadcrumb of breadcrumbs; let last = last">
      <a [routerLink]="[breadcrumb.url]">{{ breadcrumb.label }}</a>
      <span *ngIf="!last"> / </span>
    </ng-container>
  `
})
export class BreadcrumbsComponent {

  @Input() breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Array<any> = []): Array<any> {
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : '';
    let path = route.routeConfig && route.routeConfig.path ? route.routeConfig.path : '';

    let nextUrl = `${url}${path}/`;
    let breadcrumb = {
      label: route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : '',
      url: nextUrl
    };

    let newBreadcrumbs = [...breadcrumbs, breadcrumb];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
