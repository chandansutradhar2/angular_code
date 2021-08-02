import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/state.service';

@Component({
  selector: 'cn-display-name',
  templateUrl: './display-name.component.html',
  styleUrls: ['./display-name.component.css']
})
export class DisplayNameComponent implements OnInit {

  displayName:string="UN";
  constructor(private stateSvc:StateService) { 
    this.stateSvc.isLoggedIn.subscribe(r=>{
      if(r){
        let fname:string=this.stateSvc.user.fName;
        let lname:string=this.stateSvc.user.lName;
        fname.toUpperCase();
        lname.toUpperCase();
        this.displayName=fname[0]+" "+lname[0];
      }
    })
  }

  ngOnInit(): void {
  }

}
