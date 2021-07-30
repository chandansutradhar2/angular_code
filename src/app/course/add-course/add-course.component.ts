import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { DbService } from 'src/app/shared/db.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  formGrp: FormGroup;

  constructor(private fb: FormBuilder,private router:Router,
    private dbSvc:DbService,private _snackBar: MatSnackBar) {
    this.formGrp = fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['',[Validators.required,Validators.min(1)]],
      price:  ['',[Validators.required,Validators.min(1)]],
      deliveryMode: '',
    });
  }

  ngOnInit(): void {}

  save(){
    let data=this.formGrp.value;
    let course:Course={
      name:data.name,
      description:data.description,
      duration:data.duration,
      price:data.price,
      deliveryMode:data.deliveryMode,
      createdBy:'online',
      createdOn:Date.now(),
      enabled:true,
    }

    this.dbSvc.addCourse(course).then(r=>{
      this._snackBar.open('Course added succssfully','ok',{duration:2000,verticalPosition:'top'});
      this.router.navigate(['/course'])
    },err=>this._snackBar.open('error adding course','Oh noo',{duration:2000,verticalPosition:'top'}));
  }
}
