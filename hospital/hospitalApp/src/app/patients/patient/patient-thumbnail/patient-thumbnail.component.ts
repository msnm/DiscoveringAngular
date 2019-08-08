import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../../shared/model/patient.model';

@Component({
  selector: 'app-patient-thumbnail',
  templateUrl: './patient-thumbnail.component.html',
  styleUrls: ['./patient-thumbnail.component.css']
})
export class PatientThumbnailComponent implements OnInit {

  @Input() patient: Patient;
  isCollapsedPatient;
  isCollapsedTreatment;

  constructor() { }

  ngOnInit() {
    this.isCollapsedPatient = false;
    this.isCollapsedTreatment = false;
  }

}
