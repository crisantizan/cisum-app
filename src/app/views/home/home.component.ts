import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { SongBoxOnClickEmit } from '../../types/song-box-component.type';
import data from '../artists/data';
import { Router, ActivatedRoute } from '@angular/router';
import { SongMin } from 'src/app/types/song.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private router: Router,
    private _route: ActivatedRoute
  ) {}
  public latestSongs: SongMin[];

  /** when a song is loading */
  public disabledCards: boolean = false;

  ngOnInit() {
    this.sharedService.changeTitle('Online music player');

    this._route.data.subscribe((d: { latestSongs: SongMin[] }) => {
      this.latestSongs = d.latestSongs;
    });
  }

  public onSelectSong({ stopLoading, id }: SongBoxOnClickEmit) {
    this.disabledCards = true;
    console.log({ songId: id });

    setTimeout(() => {
      stopLoading();
      this.disabledCards = false;
    }, 2000);
  }

  public onSelectArtist({ id }: SongBoxOnClickEmit) {
    this.disabledCards = true;
    this.router.navigate([`/artists/${id}`]);
  }
}
