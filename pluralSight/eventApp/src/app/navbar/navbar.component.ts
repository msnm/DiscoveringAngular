import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../user/auth.service';
import {SessionI} from '../shared/event.model';
import {EventService} from '../shared/event.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm = '';
  foundSessions: SessionI[];

  constructor(public authService: AuthService, private eventService: EventService) { }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
  ngOnInit() {
  }

}
