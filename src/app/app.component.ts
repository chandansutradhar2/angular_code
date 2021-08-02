import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { DbService } from './shared/db.service';
import { StateService } from './shared/state.service';
import { LoadingService } from './util/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {

  isLoggedIn:boolean=false;

  constructor(private auth:AuthService,private router:Router,private stateSvc:StateService,private dbSvc:DbService){
   
    auth.isAuthenticated().subscribe(r=>{
      console.log("isAuthenticated Event Recieved");
      if(r){
        //code to redirect to home page
        
        this.isLoggedIn=true;
        this.dbSvc.getUserById(r.uid).
        then((usr)=>this.stateSvc.user=usr);
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


  logoutHandler(ev:any){
    console.log(ev);
    this.auth.signOut();
  }

}
