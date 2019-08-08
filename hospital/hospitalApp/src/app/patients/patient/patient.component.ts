import { Component, OnInit } from '@angular/core';
import {PatientApiService} from '../../shared/services/patient-api.service';
import {Patient} from '../../shared/model/patient.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patient: Patient;

  constructor(private patientApi: PatientApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPatient();
  }

  getPatient() {
    this.route.paramMap.subscribe(params => {
      this.patient = this.patientApi.getPatient(+params.get('patientId'));
    });
  }

}
