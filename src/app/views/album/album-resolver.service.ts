import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Artist } from 'src/app/types/artist.type';
import { AlbumService } from '../../services/album.service';

@Injectable({
  providedIn: 'root',
})
export class AlbumResolverService implements Resolve<Artist | object> {
  constructor(private service: AlbumService) {}

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
