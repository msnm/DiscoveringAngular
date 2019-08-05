import { Injectable } from '@angular/core';
import {Patient} from '../model/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientApiService {

  private patients: Patient[] = [
    {
      id: 10001,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'
    },
    {
      id: 10002,
      firstName: 'Quirine',
      lastName: 'Peeters',
      birthDate: new Date('10-03-1995'),
      sex: 'F'

    },
    {
      id: 10003,
      firstName: 'Marc',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10004,
      firstName: 'Yorick',
      lastName: 'Peeters',
      birthDate: new Date('2-03-1995'),
      sex: 'F'

    },  {
      id: 10005,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10006,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10007,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10008,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10009,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10010,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10011,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10012,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10013,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10014,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10015,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10016,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10017,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10018,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10019,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10020,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10021,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10022,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10023,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10024,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10025,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10026,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10027,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10028,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10029,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'

    },  {
      id: 10030,
      firstName: 'Michael',
      lastName: 'Schoenmaekers',
      birthDate: new Date('02-01-1994'),
      sex: 'M'
    },
  ];
  constructor() { }

  getPatient(id: number): Patient {
    return this.patients.find(patient => patient.id === id);
  }
}
