import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { mediaQuery } from 'src/app/common/helpers/match-media.helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private breakpointObserver: BreakpointObserver) {}

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  ngOnInit(): void {
    const x = this.breakpointObserver.observe(mediaQuery('xs'));

    x.subscribe((obs) => {
      console.log(obs);
    });
  }

  ngOnDestroy() {
    this.breakpointObserver.ngOnDestroy();
  }
}
