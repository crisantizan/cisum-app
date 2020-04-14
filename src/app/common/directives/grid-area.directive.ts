import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appGridArea]',
})
export class GridAreaDirective implements OnInit {
  @Input('appGridArea') area: string;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.el.nativeElement.style.gridArea = this.area;
  }
}
