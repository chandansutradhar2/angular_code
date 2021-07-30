import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { DbService } from '../shared/db.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses:Course[]=[];
  constructor(private dbSvc:DbService) { 
    this.dbSvc.getCourses().subscribe((r:any)=>{
      this.courses=r;
    },err=>{
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

}
