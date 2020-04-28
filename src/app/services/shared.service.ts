import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private appTitle: string = 'Cisum';

  private loading = new BehaviorSubject<boolean>(false);
  public loading$ = this.loading.asObservable();

  setLoading(loading: boolean) {
    this.loading.next(loading);
  }

  /** change app title */
  public changeTitle(value: string) {
    document.title = `${this.appTitle} | ${value}`;
  }
}
