import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { PageEvent } from '@angular/material/paginator';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  mediaQuery,
  mediaQueryMf,
} from 'src/app/common/helpers/match-media.helper';
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
  public pages: number;

  public displayValues: any[] = [];

  constructor(
    private sharedService: SharedService,
    private breakpoint: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.sharedService.changeTitle('Artists');

    // media queries
    const [xs, sm, md, lg] = [
      mediaQuery('xs'),
      mediaQuery('sm'),
      mediaQuery('md'),
      mediaQueryMf('lg'),
    ];

    this.breakpoint.observe([xs, sm, md, lg]).subscribe((obs) => {
      if (obs.breakpoints[xs]) {
        this.setPagination(1);
        return;
      }

      if (obs.breakpoints[sm]) {
        this.setPagination(3);
        return;
      }

      if (obs.breakpoints[md]) {
        this.setPagination(4);
        return;
      }

      if (obs.breakpoints[lg]) {
        this.setPagination(5);
        return;
      }
    });
  }

  private paginate(page: number = 1, perPage: number = 1) {
    // total pages
    const pages = Math.ceil(this.data.length / this.pageSize);
    let updatePage = false;

    if (page > pages) {
      page = pages;
      updatePage = true;
    }

    const from = (page - 1) * perPage;
    const to = from + perPage;
    const data = this.data.slice(from, to);

    return {
      page,
      perPage,
      pages,
      data,
      updatePage,
    };
  }

  private setPagination(pageSize: number) {
    this.pageSize = pageSize;
    console.log({
      pageSize: this.pageSize,
      current: this.currentPage,
      size: pageSize,
    });

    const { pages, data, updatePage, page } = this.paginate(
      this.currentPage,
      this.pageSize
    );

    if (updatePage) {
      this.pageEvent.pageIndex = page - 1;
    }

    this.pages = pages;
    this.displayValues = data;
  }

  public onChangePage(event: PageEvent) {
    this.pageEvent = event;

    this.displayValues = this.paginate(this.currentPage, this.pageSize).data;
  }

  get currentPage() {
    return !!this.pageEvent ? this.pageEvent.pageIndex + 1 : 1;
  }
}
