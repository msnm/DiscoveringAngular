import {Room} from './room.model';
import {Department} from './department.model';

export abstract class Person {
  id: number;
  firstName: string;
  lastName: string;
}

export enum Food {
  CARNIVORE = 'karnivoor' , VEGETARIAN = 'vegetarisch', VEGAN = 'veganistisch'
}

export enum TreatmentType {
  // tslint:disable-next-line:max-line-length
  MEDICATION = 'medicatie toedienen', FEEDING = 'eten geven', WASHING = 'wassen', THERAPY = 'psychologische therapie', WOUND_CARE = 'wonden verzorgen'
}

export class Treatment {
  id: number;
  type: TreatmentType;
  dateOfTreatment: Date;
  description: string;
  nursedBy?: Nurse;
}

export class HospitalizationInfo {
  id: number;
  admission: Date;
  reason: string;
  plannedResignation: Date;
  discharge?: Date;
}

export class Patient extends Person {
  birthDate: Date;
  sex: string;
  food: Food;
  hospitalizationInfo: HospitalizationInfo;
  treatments: Treatment[];
  room?: Room;
  department?: Department;
}

export class Nurse extends Person {}

