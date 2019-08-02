import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EventI} from '../shared/event.model';

@Component({
  selector: 'app-event-thumbnail',
  template: `<div class="well hoverwell thumbnail" [routerLink]="['/events', meetUp.id]">
    <h2> {{meetUp.name | uppercase }} </h2>
    <div> Date: {{meetUp?.date | date:'shortDate'}}</div>
    <div [ngClass]="{green: getStartTimeClass, bold: getStartTimeClass}" [ngSwitch]="meetUp?.time"> Time: {{meetUp?.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div> Price: {{meetUp?.price}} €</div>
    <div *ngIf="meetUp?.location">
      <span>Location: {{meetUp?.location.address}}</span>
      <span class="pad-left">{{meetUp?.location.city}}, {{meetUp?.location.country}}  </span>
    </div>
    <div [hidden]="!meetUp?.onlineUrl">
      Online URL: {{meetUp?.onlineUrl}}
    </div>
  </div>`,
  styles: [`
    .thumbnail { min-height: 210px;}
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb;}`
  ]
})
export class EventThumbnailComponent {
  // Input decorator is used to transfer data from a parent component to a child component
  @Input() meetUp: EventI;
  someProperty = 'Some Value';
  // Output decorator is to notice the parent if something happens in the child component
  // @Output() eventClick = new EventEmitter();

  getStartTimeClass() {
    const isEarlyStart = this.meetUp && this.meetUp.time === '8:00 am';
    return {green: isEarlyStart, bold: isEarlyStart};
  }
  logFoo() {
    console.log('foo');
  }
}
