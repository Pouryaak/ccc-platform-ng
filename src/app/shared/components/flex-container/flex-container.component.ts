// flex-container.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flex-container',
  templateUrl: './flex-container.component.html',
  styleUrls: ['./flex-container.component.scss']
})
export class FlexContainerComponent {
  @Input() flexDirection: 'row' | 'column' = 'row';
  @Input() justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' = 'flex-start';
  @Input() alignItems: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' = 'stretch';
  @Input() flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse' = 'nowrap';
  @Input() gap: string = "2px";
}
