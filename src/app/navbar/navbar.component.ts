import { Component, OnInit } from '@angular/core';

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

    title:string="LMS | Angular";
    constructor() { }

    ngOnInit(): void { }

    setSerachTitle(name:string){
        this.searchTitle="Search "+ name;
    }
}
