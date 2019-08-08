import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../../../shared/model/room.model';
import {Patient} from '../../../shared/model/patient.model';
import {PatientApiService} from '../../../shared/services/patient-api.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() room: Room;
  patients: Patient[];
  patientActive: Patient;
  roomStatus: string;

  constructor(private patientApi: PatientApiService) { }

  ngOnInit() {
    this.patients = this.room.beds.map(bed => this.patientApi.getPatient(bed.patientId));
    this.setPatientActive(this.patients[0]);
    this.checkStatusOfRoom();
  }

  setPatientActive(patient: Patient) {
    this.patientActive = patient;
  }

  changeActivePatient(patient) {
    this.setPatientActive(patient);
  }

  checkStatusOfRoom() {
    if (this.patients && this.patients.length !== 0) {
      this.roomStatus = 'ok';
    } else {
      this.roomStatus = 'empty';
    }
  }

}
