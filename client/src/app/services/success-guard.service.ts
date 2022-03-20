import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { ListGuardService } from "../modules/list/components/services/list-guard.service";

@Injectable({
  providedIn: 'root'
})
export class SuccessGuardService implements CanActivate {
  constructor(
    private router: Router,
    private listGuardervice: ListGuardService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean {
      return this.listGuardervice.hasJoined.pipe(
        tap((value) => {
          if (!value)
            this.router.navigate(['/']);

          return true;
        }),
      );
  }
}
