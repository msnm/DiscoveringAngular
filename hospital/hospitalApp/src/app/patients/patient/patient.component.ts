import { Component, OnInit } from '@angular/core';
import {PatientApiService} from '../../shared/services/patient-api.service';
import {Patient} from '../../shared/model/patient.model';
import {ActivatedRoute} from '@angular/router';
import {DepartmentApiService} from '../../shared/services/department-api.service';
import {Department} from '../../shared/model/department.model';
import {Room} from '../../shared/model/room.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patient: Patient;
  departments: Department[];
  rooms: Room[];

  constructor(private patientApi: PatientApiService, private departmentApi: DepartmentApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPatient();
    this.departments = this.departmentApi.getDepartments();
    this.rooms = this.departmentApi.getRooms(this.patient.department.id);
  }

  getPatient() {
    this.route.paramMap.subscribe(params => {
      this.patient = this.patientApi.getPatient(+params.get('patientId'));
    });
  }
}
