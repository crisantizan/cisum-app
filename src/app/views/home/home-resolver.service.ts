import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SongService } from 'src/app/services/song.service';
import { SongMin } from 'src/app/types/song.type';

@Injectable({
  providedIn: 'root',
})
export class HomeResolverService implements Resolve<Observable<SongMin[]>> {
  constructor(private _songService: SongService) {}

  resolve(): Observable<SongMin[]> {
    return this._songService.latest.pipe(
      catchError((err) => {
        console.error(err);
        return EMPTY;
      })
    );
  }
}
