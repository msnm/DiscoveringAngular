import {Injectable} from '@angular/core';
import {Food, HospitalizationInfo, Patient, Treatment, TreatmentType} from '../model/patient.model';
import {DepartmentApiService} from './department-api.service';

@Injectable({
  providedIn: 'root'
})
export class PatientApiService {
  private hospitalization: HospitalizationInfo = {
    id: 100202,
    admission: new Date(),
    reason: 'Open dubbele beenbreuk',
    plannedResignation: new Date()
  };

  private treatments: Treatment[] = [
    {
      id: 20001,
      type: TreatmentType.FEEDING,
      dateOfTreatment: new Date(),
      description: 'Feeding biefstuk friet.'
    },
    {
      id: 20002,
      type: TreatmentType.WASHING,
      dateOfTreatment: new Date(),
      description: 'Showering'
    },
    {
      id: 20003,
      type: TreatmentType.WOUND_CARE,
      dateOfTreatment: new Date(),
      description: 'Refreshing bandages'
    }
  ];
  private patients: Patient[] = [
    {
      id: 10001,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization
    },
    {
      id: 10002,
      firstName: 'Quirine',
      lastName: 'Peeters',
      birthDate: new Date('10/03/1995'),
      sex: 'F',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization
    },
    {
      id: 10003,
      firstName: 'Marc',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10004,
      firstName: 'Yorick',
      lastName: 'Peeters',
      birthDate: new Date('2/03/1995'),
      sex: 'F',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10005,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10006,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10007,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10008,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10009,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10010,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10011,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10012,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10013,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10014,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10015,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10016,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10017,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10018,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10019,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10020,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10021,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization

    },  {
      id: 10022,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02/01/1994'),
      sex: 'M',
      food: Food.CARNIVORE,
      treatments: this.treatments,
      hospitalizationInfo: this.hospitalization
    }
  ];
  constructor(private departmentApi: DepartmentApiService) { }

  getPatient(id: number): Patient {
    const patient: Patient = this.patients.find(pat => pat.id === id);
    patient.room = this.departmentApi.findRoomOfPatient(id);
    patient.department = this.departmentApi.findDepartmentOfPatient(id);
    return patient;
  }
}
