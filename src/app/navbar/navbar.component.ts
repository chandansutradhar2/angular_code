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
    navoptions:INavList[]=[
        {name:'Home', url:'./home'},
        {name:'About Us',url:'./aboutus'},
        {name:'Courses',url:'./courses'},
        {name:'Instructor',url:'./instructor'},
        {name:'Our Location', url:'./offices'}

    ];

    title:string="LMS | Angular";
    constructor() { }

    ngOnInit(): void { }
}
