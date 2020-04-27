import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private url: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  public getOne(artistId: string) {
    return this.http.get(`${this.url}/${artistId}`);
  }
}
