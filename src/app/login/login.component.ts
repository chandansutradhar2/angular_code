import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGrp:FormGroup;
  
  constructor() { 
    this.formGrp=new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.email]),
      'password':new FormControl('',[Validators.required,Validators.minLength(6)]),
      
    })
  }

  ngOnInit(): void {
  }


  togglePassword(){
    console.log('password toggle clicked');
  }
  login(){
    
  }

  validate(){
    
   
  }

  showSignUp(){
    
  }

  
}
