import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongBoxOnClickEmit } from '../../types/song-box-component.type';
import { SharedService } from '../../services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  public artist: any;
  public disabledCards: boolean = false;
  private suscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.suscription = this.route.data.subscribe((data: { artist: object }) => {
      this.artist = data.artist;
      this.sharedService.changeTitle(`Artist | ${this.artist.name}`, false);
    });

    this.suscription.unsubscribe();
  }

  public onSelectAlbum({ stopLoading, id }: SongBoxOnClickEmit) {
    this.disabledCards = true;
    this.router.navigate([`/albums/${id}`]);
  }
}
