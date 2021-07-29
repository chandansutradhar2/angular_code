import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lms-app';
  isLoggedIn:boolean=false;
  grossSalary:number=98888;
  deduction:number=15000;
  constructor(){
   
    console.log("AppComponent loaded");
  }

  toggleLogin(){
    this.isLoggedIn?this.isLoggedIn=false:this.isLoggedIn=true;
  }
}
