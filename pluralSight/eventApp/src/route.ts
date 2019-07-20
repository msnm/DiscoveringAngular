import {EventsListComponent} from './app/events/events-list.component';
import {EventDetailsComponent} from './app/events/event-details/event-details.component';
import {Routes} from '@angular/router';
import {CreateEventComponent} from './app/events/create-event/create-event.component';
import {EventRouteActivatorService} from './app/events/event-details/event-route-activator.service';
import {Error404Component} from './app/errors/error.component';
import {EventsListResolverService} from './app/events/events-list-resolver.service';
import {CreateSessionComponent} from './app/events/create-session/create-session.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService }},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'user', loadChildren: './app/user/user.module#UserModule'}
];
