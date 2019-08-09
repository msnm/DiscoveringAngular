import {Component, Input, OnInit} from '@angular/core';
import {Treatment, TreatmentType} from '../../../shared/model/patient.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {

  @Input() treatment: Treatment;
  treatmentForm: FormGroup;
  treatmentTypes: string[] = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.valueOfTreatmentType();
    this.treatmentForm = this.fb.group({
      type: [this.treatment.type],
      dateOfTreatment: [this.treatment.dateOfTreatment, Validators.required],
      description: [this.treatment.description, Validators.required]
    });
    this.treatmentForm.disable();
  }

  save() {
    console.log('Saved: ' + JSON.stringify(this.treatmentForm.value));
    this.treatmentForm.disable();
  }

  deleteTreatment() {
    console.log('Deleted');
    this.treatmentForm.disable();
  }

  valueOfTreatmentType() {
    for (let value of Object.keys(TreatmentType)) {
      this.treatmentTypes.push(TreatmentType[value]);
    }
  }
}
