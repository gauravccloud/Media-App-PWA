import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './app.service';

@Injectable()
export class SearchResolve implements Resolve<any> {

  constructor(private searchService: DataService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.searchService.getSearchDatayDelay(route.queryParams['q']);
  }
}
