import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  public album: any;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe((data: { album: any }) => {
      this.album = data.album;
      this.sharedService.changeTitle(`Album | ${data.album.name}`, false);
    });

    this.subscription.unsubscribe();
  }
}
