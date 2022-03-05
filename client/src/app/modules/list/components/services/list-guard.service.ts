import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ListService } from 'src/app/services/list.service';

@Injectable({
  providedIn: 'root'
})
export class ListGuardService implements CanLoad {

  constructor(
    private router: Router,
    private listService: ListService
  ) { }

  canLoad(route: Route):  Observable<boolean> | Promise<boolean> | boolean {
      return this.listService.hasJoined.pipe(
        tap((value) => {
          if (!value)
            this.router.navigate(['/']);

          return true;
        }),
      );
  }
}
