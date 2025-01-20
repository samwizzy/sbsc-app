import { Injectable, inject } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn,
} from '@angular/router';
import { Observable, filter, of, take } from 'rxjs';
import { RhombusShapeService } from './rhombus-shape.service';

@Injectable({
  providedIn: 'root',
})
export class RhombusShapeResolver implements Resolve<boolean> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true);
  }
}

export const PostResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  rhomBus: RhombusShapeService = inject(RhombusShapeService)
): Observable<any> =>
  rhomBus.getPosts().pipe(
    filter((post) => !!post),
    take(1)
  );
