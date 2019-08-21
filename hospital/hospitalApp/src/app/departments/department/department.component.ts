import {Component, Input, OnInit} from '@angular/core';
import {Department} from '../../shared/model/department.model';
import {DepartmentApiService} from '../../shared/services/department-api.service';
import {Room} from '../../shared/model/room.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  department: Department;
  isOrderByRoomNumber = true;
  statusOfRooms: any[] = [];

  constructor(private departmentService: DepartmentApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getDepartment(+params.get('departmentId'));
    });
  }

  orderByStatus(status: string) {
    const roomsFiltered: number[] = this.statusOfRooms.filter(room => room.status === status).map( room => +room.roomNumber);
    if (roomsFiltered && roomsFiltered.length > 0) {
      this.department.rooms.sort((r1, r2) => roomsFiltered.includes(r1.roomNumber) >= roomsFiltered.includes(r2.roomNumber) ? -1 : 1);
    }
  }

  orderByRoomNumber(): void {
    !this.isOrderByRoomNumber ? this.department.rooms.sort((room1, room2) => room1.roomNumber <= room2.roomNumber ? -1 : 1) :
      this.department.rooms.sort((room1, room2) => room1.roomNumber >= room2.roomNumber ? -1 : 1) ;
    this.isOrderByRoomNumber = !this.isOrderByRoomNumber;
  }

  getDepartment(id: number) {
    this.departmentService.getDepartment(id).subscribe(
      (department: Department) => this.department = department,
      error => console.log(error)
    );
  }

  setStatusOfRoom(event: any) {
    const room = this.statusOfRooms.find(r => r.roomNumber === event.roomNumber);
    if (room) {
      const index = this.statusOfRooms.indexOf(room);
      this.statusOfRooms[index] = event;
    } else {
      this.statusOfRooms.push(event);
    }
  }
}
