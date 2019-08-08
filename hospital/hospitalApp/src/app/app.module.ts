import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './departments/department-list/department-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DepartmentComponent } from './departments/department/department.component';
import { DepartmentThumbnailComponent } from './departments/department-list/department-thumbnail/department-thumbnail.component';
import { RoomComponent } from './departments/department/room/room.component';
import { PatientComponent } from './patients/patient/patient.component';
import { PatientThumbnailComponent } from './patients/patient/patient-thumbnail/patient-thumbnail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TreatmentComponent } from './patients/patient/treatment/treatment.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    NavBarComponent,
    DepartmentComponent,
    DepartmentThumbnailComponent,
    RoomComponent,
    PatientComponent,
    PatientThumbnailComponent,
    TreatmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
