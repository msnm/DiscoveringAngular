import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventI} from '../../shared/event.model';
import {EventService} from '../../shared/event.service';

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    em { float:right; color:#bd362f; padding-left: 10px;}
    .error input { background: #bd362f;}
    .error ::-webkit-input-placeholder { color: #999;}
    .error ::-moz-placeholder { color: #999;}
    .error :-moz-placeholder { color: #999;}
    .error ::-ms-input-placeholder{ color: #999;}

  `]
})
export class CreateEventComponent  {

  isDirty = true;
  newEvent: EventI;

  constructor(private router: Router, private eventService: EventService) {}

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues: EventI) {
    this.isDirty = false;
    this.eventService.saveEvent(formValues);
    this.router.navigate(['/events']);
  }
}
