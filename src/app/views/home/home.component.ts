import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { mediaQuery } from 'src/app/common/helpers/match-media.helper';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

interface SidenavOptions {
  disabledClosed: boolean;
  opened: boolean;
  mode: 'over' | 'side';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private breakpointObserver: BreakpointObserver) {}

  public sidenavOptions: SidenavOptions;
  public desktopView: boolean;

  /** when a song is loading */
  public songLoading: boolean = false;

  public searchControl = new FormControl();
  public songs: string[] = [
    'Muse - Psycho',
    'Silence Speaks - While She Sleeps',
    'Into The Fire - Asking Alexandria',
    'Fiesta pagana - Mago de Oz',
  ];
  public filteredSongs: Observable<string[]>;

  ngOnInit(): void {
    this.filteredSongs = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
    const sm = this.breakpointObserver.observe(mediaQuery('sm'));

    sm.subscribe((obs) => {
      if (!obs.matches) {
        this.desktopView = false;

        this.sidenavOptions = {
          disabledClosed: false,
          opened: false,
          mode: 'over',
        };
        return;
      }

      this.desktopView = true;
      this.sidenavOptions = {
        disabledClosed: true,
        opened: true,
        mode: 'side',
      };
    });
  }

  /** searcher filter */
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.songs.filter((song) =>
      this._normalizeValue(song).includes(filterValue)
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  ngOnDestroy() {
    this.breakpointObserver.ngOnDestroy();
  }
}
