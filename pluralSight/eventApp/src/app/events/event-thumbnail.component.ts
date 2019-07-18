import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template: `<div class="well hoverwell thumbnail">
    <h2> {{meetUp.name}} </h2>
    <div> Date: {{meetUp.date}}</div>
    <div> Time: {{meetUp.time}}</div>
    <div> Price: {{meetUp.price}} €</div>
    <div>
      <span>Location: {{meetUp.location.address}}</span>
      <span class="pad-left">{{meetUp.location.city}}, {{meetUp.location.country}}  </span>
    </div>
  </div>`,
  styles: [ `.pad-left { margin-left: 10px;}
              .well div { color: red;}` ]
})
export class ThumbnailComponent {
  // Input decorator is used to transfer data from a parent component to a child component
  @Input() meetUp: any;
  someProperty = 'Some Value';
  // Output decorator is to notice the parent if something happens in the child component
  // @Output() eventClick = new EventEmitter();

  logFoo() {
    console.log('foo');
  }
}
