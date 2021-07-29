import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }


  togglePassword(){
    console.log('password toggle clicked');
  }
  login(email:any,pass:any){
    console.log(email.value,pass.value);
  }

}
