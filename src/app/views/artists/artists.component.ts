import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.changeTitle('Artists');
  }

}
