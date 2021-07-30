import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lms-app';
  isLoggedIn:boolean=false;

  constructor(private auth:AuthService,private router:Router){
   
    
    auth.isAuthenticated().subscribe(r=>{
      console.log("isAuthenticated Event Recieved");
      if(r){
        //code to redirect to home page
        this.isLoggedIn=true;
        console.log('user already logged in', this.isLoggedIn);
        //router.navigate(['']);
        this.isLoggedIn=true;
       console.log(this.isLoggedIn);
      }else{
        //code to redirect to login page
        this.isLoggedIn=false;
        router.navigate(['login'])
      }
    },err=>{
      router.navigate(['login']);
      this.isLoggedIn=false;
    })
  }


}
