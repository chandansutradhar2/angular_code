import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


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
        {name:'', url:''},
        {name:'',url:'aboutus'},
        {name:'',url:'course'},
        {name:'',url:'instructor'},
        {name:'', url:'./offices'}

    ];

    choices:any[]=[
        {'name':'Hindi', value:'hi'},
        {'name':'English', value:'en'},
        
    ]
  @Input()  title:string="";//to recieve data from parent
  @Output() onLogoutClick:EventEmitter<string>=new EventEmitter(); //to pass data to parent
    constructor(private translateSvc:TranslateService) {
        
        this.translateSvc.onDefaultLangChange.subscribe(r=>{
            this.setNavView();
        })
        
     }

     setNavView(){
        this.translateSvc.get(['navbar.home','navbar.aboutus','navbar.courses','navbar.instructor','navbar.location']).subscribe(r=>{
            console.log(r);
            this.navoptions[0].name=r["navbar.home"];
            this.navoptions[1].name=r["navbar.aboutus"];
            this.navoptions[2].name=r["navbar.courses"]
            this.navoptions[3].name=r["navbar.instructor"]
            this.navoptions[4].name=r["navbar.location"]
        })
        this.translateSvc.get('navbar.title').subscribe(r=>{
            console.log(r);
            this.title=r;
        });

     }
    ngOnInit(): void {
        console.log(this.title);
     }

    setSerachTitle(name:string){
        this.searchTitle="Search "+ name;
    }

    doLogout(){
        this.onLogoutClick.emit("Logout clicked");
    }

    changeLanguage(ev:any){
        console.log(ev.value);
        this.translateSvc.setDefaultLang(ev.value);
    }
}
