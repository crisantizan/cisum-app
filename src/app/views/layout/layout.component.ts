import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  // public loading: boolean;

  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.sharedService.loading$.subscribe((val) => {
    //     console.log('STATE: ', val);
    //     this.loading = val;
    //   });
    // }, 0);
    // this.sharedService.loading.subscribe((value) => {
    //   this.loading = value;
    // });
  }
}
