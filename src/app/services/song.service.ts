import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginateApiResponse } from '../types/shared.type';
import { SongMin } from '../types/song.type';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private _latest: Observable<SongMin[]>;

  constructor(private _http: HttpClient) {}

  private _getLatestSongs(
    quantity: number = 4
  ): Observable<PaginateApiResponse<SongMin[]>> {
    return this._http.get<any>(`/songs?page=1&limit=${quantity}`);
  }

  /** get latest songs */
  public get latest(): Observable<SongMin[]> {
    /** load from api one time */
    if (!this._latest) {
      this._latest = this._getLatestSongs().pipe(
        map((d) => d.response.docs),
        shareReplay(1)
      );
    }

    return this._latest;
  }
}
