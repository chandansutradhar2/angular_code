import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models/user.model';
import { AuthService } from '../../shared/auth.service';
import { DbService } from '../../shared/db.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  formGrp: FormGroup;
  qualifications: string[] = [
    'SSC- Secondary',
    'HSC - Higher Secondary',
    'Diploma',
    'Graduate - Bachelor Degree',
    'Master Degree',
    'Post Graduate',
  ];
  show:boolean=false;
  popUpMsg:string="";
  constructor(private db: DbService, private auth: AuthService) {
    this.formGrp = new FormGroup({
      fName: new FormControl('', [Validators.required]),
      lName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      mobileNo: new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(12),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/([a-zA-Z0-9!@#$%^&*])+/),
      ]),
      qualification: new FormControl(''),
      employed: new FormControl(''),
      companyName: new FormControl(''),
      role: new FormControl('student', Validators.required),
    });
    this.formGrp.controls['companyName'].disable();
    //this.formGrp.controls['fName'].touched
    this.formGrp.controls['employed'].valueChanges.subscribe((val) => {
      console.log(val);
      val == 'true'
        ? this.formGrp.controls['companyName'].enable()
        : this.formGrp.controls['companyName'].disable();
    });
  }

  get form() {
    return this.formGrp.controls;
  }
  ngOnInit(): void {
    console.log(this.form);
  }

  submit() {
    if (this.formGrp.invalid) {
      this.popUpMsg="there is an error in form";
      this.show=true;
      return;
    }

    let user: User = this.formGrp.value;

    this.auth.signUp(user.email,user.password).then((uid)=>{
      user.uid=uid;
      this.db.createUser(user).then(()=>{
        alert('user created successfully');
        this.formGrp.reset();
        this.formGrp.controls['role'].setValue('student');
      },err=>alert(err))
    },err=>alert(err));

  }

}
