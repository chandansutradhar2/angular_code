import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string="";
password:string="";
emailerr:string="";
passworderr:string="";
  
  constructor() { }

  ngOnInit(): void {
  }


  togglePassword(){
    console.log('password toggle clicked');
  }
  login(){
    
  }

  validate(){
    
    if(this.email.length<=0){this.emailerr="email cannot be left blank"; return}else{
      this.emailerr="";
    }
    let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regex.test(this.email)){
      this.emailerr="";
    }else{
      this.emailerr="email format is incorrect"
    }
  }

  showSignUp(){
    
  }
}
