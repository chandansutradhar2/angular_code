import { Component } from "@angular/core";

@Component({
   selector:'cn-second', 
   templateUrl:'./second.component.html',
   styleUrls:['./second.component.css'] 
})
export class SecondComponent{
    constructor(){
        console.log('second component invoked');
    }
}