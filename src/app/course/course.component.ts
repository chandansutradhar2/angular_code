import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/course.model';
import { DbService } from '../shared/db.service';
import { StateService } from '../shared/state.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  selectedCourse!: Course;
  courses:Course[]=[];
  constructor(private dbSvc:DbService,private router:Router,private stateSvc:StateService) { 
    this.dbSvc.getCourses().subscribe((r:any)=>{
      this.courses=r;
      
      this.courses.sort((a,b)=>{
        return a.name < b.name?-1:1
      });
    },err=>{
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

  onSelect(c:Course){
    console.log(c);
    this.selectedCourse=c;
  }

  redirect(){
    if(!this.selectedCourse){
      alert('please select a course first to edit');
      return;
    }

    this.stateSvc.course=this.selectedCourse;
    this.router.navigate(['course/add-course'],{
      queryParams:{name:this.selectedCourse.name}
    });
  }
}
