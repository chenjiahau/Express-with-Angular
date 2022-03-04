import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { take, tap } from "rxjs/operators";

import { ListService } from "./list.service";

@Injectable({
  providedIn: 'root'
})
export class SuccessGuardService implements CanActivate {
  constructor(
    private router: Router,
    private listService: ListService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean {

      return this.listService.hasJoined.pipe(
        tap((value) => {
          if (!value)
            this.router.navigate(['/']);

          return true;
        }),
      );
  }
}
