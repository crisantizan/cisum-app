import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  private albumId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.params.id);
    console.log({ albumId: this.albumId });
  }
}
