import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private appTitle: string = 'Cisum';

  constructor() {}

  /** change app title */
  public changeTitle(value: string) {
    document.title = `${this.appTitle} | ${value}`;
  }
}
