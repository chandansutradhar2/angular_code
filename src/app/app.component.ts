import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

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
  constructor(private auth:AuthService){
   
    console.log("AppComponent loaded");
    auth.isAuthenticated().subscribe(r=>{
      if(r){
        //code to redirect to home page
      }else{
        //code to redirect to login page
      }
    })
  }

  toggleLogin(){
    this.isLoggedIn?this.isLoggedIn=false:this.isLoggedIn=true;
  }
}
