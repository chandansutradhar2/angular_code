import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../shared/auth.service';
import { DbService } from '../shared/db.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGrp:FormGroup;
  
  constructor(private dbSvc:DbService,private authSvc:AuthService,private router:Router) { 
    this.formGrp=new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.email]),
      'password':new FormControl('',[Validators.required,Validators.minLength(6)]),
    })
  }

  ngOnInit(): void {
  }


  get form(){
    return this.formGrp.controls;
  }
  togglePassword(){
    console.log('password toggle clicked');
  }
  login(){
    if(this.formGrp.invalid)return;
    this.authSvc.signIn(this.form.email.value,this.form.password.value).then(uid=>{
      this.dbSvc.getUserById(uid).then(usr=>{
        let user:User=usr;
        console.log(user);
        alert('login successfull');
        this.router.navigate(['aboutus']);
      },err=>alert(err));
    },err=>{
      alert(err);
    })
  }

  validate(){
    
   
  }

  showSignUp(){
    
  }

  
}
