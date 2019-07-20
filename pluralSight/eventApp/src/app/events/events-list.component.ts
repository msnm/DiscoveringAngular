import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ToastrService} from '../shared/toastr.service';
import {ActivatedRoute} from '@angular/router';
import {EventI} from '../shared/event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {

  events: EventI[];

  constructor(private eventService: EventService, private toastrService: ToastrService, private route: ActivatedRoute) {
  }

  handleThumbnailClick(eventName: string) {
    this.toastrService.success(eventName);
  }

  ngOnInit() {
    this.events = this.route.snapshot.data.events;
  }

}


