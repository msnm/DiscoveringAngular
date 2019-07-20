import {Component, OnInit} from '@angular/core';
import {EventService} from '../../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import {EventI} from '../../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styles: [ `
    .container { padding-left:20px; padding-rigiht: 20px;}
    .event-image { height: 100px;}
  `]
})
export class EventDetailsComponent implements  OnInit {

  event: EventI;
  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }
}
