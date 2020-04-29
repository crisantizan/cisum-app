import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongBoxOnClickEmit } from '../../types/song-box-component.type';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  public artist: any;
  private artistId: number;
  public disabledCards: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // this.artistId = Number(this.route.snapshot.params.id);
    // console.log({ artistId: this.artistId });

    this.route.data.subscribe((data: { artist: object }) => {
      this.artist = data.artist;
      console.log(this.artist);
    });
  }

  public onSelectAlbum({ stopLoading, id }: SongBoxOnClickEmit) {
    this.disabledCards = true;
    // stopLoading();
    // console.log({stopLoading, id});
    setTimeout(() => {
      // stopLoading();
      this.router.navigate([`/albums/${id}`]);
    }, 2000);
  }
}
