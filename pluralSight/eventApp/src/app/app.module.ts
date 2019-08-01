import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import {EventService} from './shared/event.service';
import {TOASTR_TOKEN, ToastrI} from './shared/toastr.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../route';
import {CreateEventComponent} from './events/create-event/create-event.component';
import {Error404Component} from './errors/error.component';
import {EventRouteActivatorService} from './events/event-details/event-route-activator.service';
import {EventsListResolverService} from './events/events-list-resolver.service';
import {UserModule} from './user/user.module';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import {SessionListComponent} from './events/event-details/session-list.component';
import {CollapsibleWellComponent} from './shared/collapsible-well.component';
import {DurationPipe} from './shared/duration.pipe';

declare let toastr: ToastrI;

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventService, { provide: TOASTR_TOKEN, useValue: toastr }, EventRouteActivatorService, EventsListResolverService, AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
