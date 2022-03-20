import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListGuardService implements CanLoad {
  hasJoined = new BehaviorSubject(false);

  constructor(
    private router: Router
  ) { }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.hasJoined.pipe(
      tap((value) => {
        if (!value)
          this.router.navigate(['/']);

        return true;
      }),
    );
  }
}
