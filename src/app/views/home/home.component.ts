import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { mediaQuery } from 'src/app/common/helpers/match-media.helper';
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

  @ViewChild('sidenav') sidenav: MatSidenav;

  public sidenavOptions: SidenavOptions = {
    disabledClosed: false,
    opened: false,
    mode: 'over',
  };

  ngOnInit(): void {
    const xs = this.breakpointObserver.observe([
      mediaQuery('sm'),
      mediaQuery('md'),
    ]);

    xs.subscribe((obs) => {
      console.log(obs);
    });
  }

  ngOnDestroy() {
    this.breakpointObserver.ngOnDestroy();
  }
}
