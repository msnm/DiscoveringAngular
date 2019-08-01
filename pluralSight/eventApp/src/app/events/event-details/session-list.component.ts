import {Component, Input, OnChanges} from '@angular/core';
import {SessionI} from '../../shared/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: SessionI[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: SessionI[];

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  filterSessions(filter) {
    if (filter === 'all') {
      return this.visibleSessions = this.sessions;
    } else {
      return this.visibleSessions = this.sessions.filter(v => v.level.toLowerCase() ===  this.filterBy);
    }
  }
}

function sortByNameAsc(s1: SessionI, s2: SessionI) {
  if ( s1.name > s2.name) {
    return 1;
  }
  else if (s1.name === s2.name) {
    return 0;
  }
  else {
    return -1;
  }
}

function sortByVotesDesc(s1: SessionI, s2: SessionI) {
  return s2.voters.length - s1.voters.length;
}

