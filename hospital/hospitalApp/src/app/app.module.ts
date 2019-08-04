import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './departments/department-list/department-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DepartmentComponent } from './departments/department/department.component';
import { DepartmentThumbnailComponent } from './departments/department-list/department-thumbnail/department-thumbnail.component';
import { RoomComponent } from './departments/department/room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    NavBarComponent,
    DepartmentComponent,
    DepartmentThumbnailComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
