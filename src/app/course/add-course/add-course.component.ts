import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { DbService } from 'src/app/shared/db.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  formGrp: FormGroup;

  constructor(private fb: FormBuilder,private router:Router,private dialogSvc:MatDialog,
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

  async cancel(){
    if(this.formGrp.dirty){
      let dialogRef=await this.dialogSvc.open(AlertDialogComponent);
      dialogRef.afterClosed().subscribe(res=>{
        console.log(res);
        res?this.router.navigate(['/course']):null;
      })
    }else{
      this.router.navigate(['/course'])
    }

    
  }
}


