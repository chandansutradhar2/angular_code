import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cn-footer',
    template: `<div> Chandan Naresh copyright @ 2021</div>`,
    styles: [`div{
        position:absolute;
        margin-top:99%;
        text-align:center;
        width:100vw;
        height:15px;
        color:white;
        background-color:black
    }`]
})
export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
