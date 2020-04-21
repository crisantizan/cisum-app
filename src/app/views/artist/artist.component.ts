import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  private artistId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.artistId = Number(this.route.snapshot.params.id);
    console.log({ artistId: this.artistId });
  }
}
