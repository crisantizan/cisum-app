import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    // add svg icon
    this.matIconRegistry
      .addSvgIcon(
        'guitar-man',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/svg/cover-login.svg'
        )
      )
      .addSvgIcon(
        'home-icon',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/svg/guitar.svg'
        )
      )
      .addSvgIcon(
        'skull',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/svg/skull.svg'
        )
      )
      .addSvgIcon(
        'maloik',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          '../assets/svg/maloik.svg'
        )
      );
  }
}
