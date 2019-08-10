import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {PatientApiService} from '../../shared/services/patient-api.service';
import {Patient, Treatment} from '../../shared/model/patient.model';
import {ActivatedRoute} from '@angular/router';
import {DepartmentApiService} from '../../shared/services/department-api.service';
import {Department} from '../../shared/model/department.model';
import {Room} from '../../shared/model/room.model';
import {error} from 'util';
import {TreatmentComponent} from './treatment/treatment.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patient: Patient;
  departments: Department[];
  addPatient = false;

  constructor(private patientApi: PatientApiService, private departmentApi: DepartmentApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getDepartments();
    this.getPatient();
  }

  getDepartments() {
    this.departmentApi.getDepartments().subscribe(
      (deps: Department[]) => this.departments = deps,
      error => console.log(error)
    );
  }

  treatmentChanged(treatment: Treatment) {
    if(!treatment) {
      this.toggleAddPatient();
    }
    if (!treatment.id) {
      this.addTreatment(treatment);
    }
    const itemToUpdate = this.patient.treatments.find(t => t.id === treatment.id);
    const index = this.patient.treatments.indexOf(itemToUpdate);
    this.patient.treatments[index] = treatment;
    console.log('Updating patient to backend:', this.patient);
    this.patientApi.updateTreatment(this.patient).subscribe(
      () => this.getPatient());
  }

  addTreatment(treatment: Treatment) {
    console.log('Adding treatment', treatment);
    const id = this.patient.treatments[this.patient.treatments.length - 1].id + 1;
    treatment.id = id;
    this.patient.treatments.push(treatment);
    console.log('Adding new treatment to patient.', this.patient);
    this.patientApi.addTreatment(this.patient).subscribe(
      () => this.getPatient());
    this.toggleAddPatient();
  }
  toggleAddPatient() {
    this.addPatient = !this.addPatient;
  }

  getPatient() {
    this.route.paramMap.subscribe(  params => {
       this.patientApi.getPatient(+params.get('patientId')).subscribe(
         (patient: Patient) => {
           this.patient = patient;
           this.departmentApi.findDepartmentOfPatient(this.patient.id).subscribe(
             (dep: Department) => {
              this.patient.department = dep;
              this.patient.room = this.patient.department.rooms.find(
                room => room.beds.find(bed => bed.patientId === this.patient.id) !== undefined);
            },
            error => console.log(error)
          );
        },
        error => console.log(error)
      );
    });
  }
}
