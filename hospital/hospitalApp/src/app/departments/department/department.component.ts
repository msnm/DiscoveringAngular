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

  rooms: Room[];

  constructor(private departmentService: DepartmentApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.rooms = this.departmentService.getRooms(+params.get('departmentId'));
    });
  }
}
