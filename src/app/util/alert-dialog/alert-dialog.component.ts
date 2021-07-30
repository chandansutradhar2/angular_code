import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alert-dialog',
  templateUrl: './alert-dialog.component.html',
  
})
export class AlertDialogComponent implements OnInit {

  @Input() msg:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
