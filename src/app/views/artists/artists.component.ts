import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { PageEvent } from '@angular/material/paginator';
import { BreakpointObserver } from '@angular/cdk/layout';
import { mediaQuery } from 'src/app/common/helpers/match-media.helper';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  // mat paginator output
  public pageEvent: PageEvent;

  public length: number = 100;
  public pageSize: number = 1;

  public displayValues = [0];

  constructor(
    private sharedService: SharedService,
    private breakpoint: BreakpointObserver
  ) {}

  ngOnInit(): void {
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

  /** get total pages available */
  get totalPages() {
    return Math.ceil(this.length / this.pageSize);
  }

  get currentPage() {
    return !!this.pageEvent ? this.pageEvent.pageIndex + 1 : 1;
  }
}
