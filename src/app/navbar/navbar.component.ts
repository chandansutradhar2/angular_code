import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../shared/auth.service';

interface INavList{
    name:string;
    url:string;
}
@Component({
    selector: 'cn-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

searchTitle:string="Search";
    navoptions:INavList[]=[
        {name:'Home', url:''},
        {name:'About Us',url:'aboutus'},
        {name:'Courses',url:'course'},
        {name:'Instructor',url:'instructor'},
        {name:'Our Location', url:'./offices'}

    ];

  @Input()  title:string="";//to recieve data cfrom parent
  @Output() onLogoutClick:EventEmitter<string>=new EventEmitter(); //to pass data to parent
    constructor() { }

    ngOnInit(): void {
        console.log(this.title);
     }

    setSerachTitle(name:string){
        this.searchTitle="Search "+ name;
    }

    doLogout(){
        this.onLogoutClick.emit("Logout clicked");
    }
}
