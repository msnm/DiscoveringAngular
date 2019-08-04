import { Injectable } from '@angular/core';
import {Department} from '../model/department.model';
import {Room} from '../model/room.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentApiService {

  private rooms: Room[] = [
    {
      roomNumber: 1,
      width: 3.5,
      length: 5,
      toilet: true,
      shower: true,
      bath: false,
      saloon: false,
      baby: false,
      beds: [ { id: 1 }, { id: 2 } ]
   },
    {
      roomNumber: 2,
      width: 3.5,
      length: 5,
      toilet: true,
      shower: false,
      bath: true,
      saloon: true,
      baby: false,
      beds: [ { id: 3 }, { id: 4 } ]
    },
    {
      roomNumber: 3,
      width: 3.5,
      length: 7,
      toilet: true,
      shower: false,
      bath: true,
      saloon: true,
      baby: true,
      beds: [ { id: 5 } ]
    },
    {
      roomNumber: 4,
      width: 3.5,
      length: 5,
      toilet: true,
      shower: true,
      bath: false,
      saloon: false,
      baby: false,
      beds: [ { id: 6 }, { id: 7 } ]
    },
    {
      roomNumber: 5,
      width: 3.5,
      length: 5,
      toilet: true,
      shower: false,
      bath: true,
      saloon: true,
      baby: false,
      beds: [ { id: 8 }, { id: 9 } ]
    },
    {
      roomNumber: 6,
      width: 3.5,
      length: 7,
      toilet: true,
      shower: false,
      bath: true,
      saloon: true,
      baby: true,
      beds: [ { id: 10 } ]
    }, {
      roomNumber: 7,
      width: 3.5,
      length: 5,
      toilet: true,
      shower: true,
      bath: false,
      saloon: false,
      baby: false,
      beds: [ { id: 11 }, { id: 12 } ]
    },
    {
      roomNumber: 8,
      width: 3.5,
      length: 5,
      toilet: true,
      shower: false,
      bath: true,
      saloon: true,
      baby: false,
      beds: [ { id: 13 }, { id: 14 } ]
    },
    {
      roomNumber: 9,
      width: 3.5,
      length: 7,
      toilet: true,
      shower: false,
      bath: true,
      saloon: true,
      baby: true,
      beds: [ { id: 15 } ]
    }, {
      roomNumber: 10,
      width: 3.5,
      length: 5,
      toilet: true,
      shower: true,
      bath: false,
      saloon: false,
      baby: false,
      beds: [ { id: 16 }, { id: 17 } ]
    },
    {
      roomNumber: 11,
      width: 3.5,
      length: 5,
      toilet: true,
      shower: false,
      bath: true,
      saloon: true,
      baby: false,
      beds: [ { id: 18 }, { id: 19 } ]
    },
    {
      roomNumber: 12,
      width: 3.5,
      length: 7,
      toilet: true,
      shower: false,
      bath: true,
      saloon: true,
      baby: true,
      beds: [ { id: 20 } ]
    },
  ];

  private departments: Department[] = [
    {
      id: 1,
      code: 'MTN',
      name: 'Materniteit',
      imgUrl: '/assets/images/materniteit.jpg',
      rooms: this.rooms
    },
    {
      id: 2,
      code: 'KND',
      name: 'Kinderafdeling',
      imgUrl: '/assets/images/kinderafdeling.jpg',
      rooms: this.rooms

    },
    {
      id: 3,
      code: 'PLZ',
      name: 'Palliatieve zorg',
      imgUrl: '/assets/images/palliatieve.jpg',
      rooms: this.rooms
    },
    {
      id: 4,
      code: 'ITZ',
      name: 'Intensieve zorg',
      imgUrl: '/assets/images/intensieve.jpg',
      rooms: this.rooms
    },
    {
      id: 5,
      code: 'CCU',
      name: 'Beroertezorg',
      imgUrl: '/assets/images/beroertezorg.jpg',
      rooms: this.rooms
    },
    {
      id: 6,
      code: 'GRT',
      name: 'Geriatrie',
      imgUrl: '/assets/images/geriatrie.jpg',
      rooms: this.rooms
    },
  ];


  constructor() { }

  getDepartments(): Department[] {
    return this.departments;
  }

  getRooms(departmentId: number): Room[] {
    return this.departments[departmentId - 1].rooms;
  }


}
