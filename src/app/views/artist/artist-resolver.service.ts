import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Artist } from 'src/app/types/artist.type';
import { ArtistService } from 'src/app/services/artist.service';

@Injectable({
  providedIn: 'root',
})
export class ArtistResolverService implements Resolve<Artist | object> {
  constructor(private service: ArtistService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Artist | Observable<Artist | object> | Promise<Artist> {
    const id = route.paramMap.get('id');

    return this.service.getOne(id).pipe(
      catchError((err) => {
        console.error(err);
        return EMPTY;
      })
    );
  }
}
