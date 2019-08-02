import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-upvote',
  template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i class="glyphicon glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-inverse votingcount">
          <div>{{count}}</div>
        </div>
      </div>
   </div>`,
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'white';
  }

  @Input() count: number;
  @Output() vote = new EventEmitter();
  iconColor: string;

  onClick() {
    this.vote.emit({});
  }
}
