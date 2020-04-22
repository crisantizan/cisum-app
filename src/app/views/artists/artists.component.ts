import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { PageEvent } from '@angular/material/paginator';
import { BreakpointObserver } from '@angular/cdk/layout';
import { mediaQuery } from 'src/app/common/helpers/match-media.helper';
import { HttpClient } from '@angular/common/http';
import d from './data';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  public data: any[] = d;
  // mat paginator output
  public pageEvent: PageEvent;

  public length: number = 100;
  public pageSize: number = 1;

  public displayValues = [0];

  constructor(
    private sharedService: SharedService,
    private breakpoint: BreakpointObserver,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    console.log(this.paginate(10, 1));
    this.sharedService.changeTitle('Artists');

    this.breakpoint
      .observe([
        mediaQuery('xs'),
        mediaQuery('sm'),
        mediaQuery('md'),
        mediaQuery('lg'),
      ])
      .subscribe((obs) => {
        console.log(obs);
        if (obs.breakpoints[mediaQuery('xs')]) {
          this.pageSize = 1;
          this.displayValues = [0];
          return;
        }

        if (obs.breakpoints[mediaQuery('sm')]) {
          this.pageSize = 3;
          this.displayValues = [0, 1, 3];
          return;
        }

        if (obs.breakpoints[mediaQuery('md')]) {
          this.pageSize = 4;
          this.displayValues = [0, 1, 2, 3];
          return;
        }

        if (obs.breakpoints[mediaQuery('lg')]) {
          this.pageSize = 5;
          this.displayValues = [0, 1, 2, 3, 4];
          return;
        }
      });
  }

  private paginate(page: number = 1, perPage: number = 1) {
    const from = (page - 1) * perPage;
    const to = from + perPage;
    const data = this.data.slice(from, to);

    return { page, perPage, total: this.data.length, data };
  }

  /** get total pages available */
  get totalPages() {
    return Math.ceil(this.length / this.pageSize);
  }

  get currentPage() {
    return !!this.pageEvent ? this.pageEvent.pageIndex + 1 : 1;
  }
}
