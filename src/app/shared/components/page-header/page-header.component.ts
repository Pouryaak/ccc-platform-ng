import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input() title: string = "";
  @Input() buttonLabel?: string;
   @Input() haveBack: boolean = false;
  @Output() onButtonClick: EventEmitter<void> = new EventEmitter();

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

}
