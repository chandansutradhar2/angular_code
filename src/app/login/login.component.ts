import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string="";
password:string="";
  
  constructor() { }

  ngOnInit(): void {
  }


  togglePassword(){
    console.log('password toggle clicked');
  }
  login(){
    console.log(this.email,this.password);
    alert('login failed. pls try again');
    this.email="";
  
  }

}
