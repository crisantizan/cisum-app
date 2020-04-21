import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.changeTitle('Albums');
  }

}
