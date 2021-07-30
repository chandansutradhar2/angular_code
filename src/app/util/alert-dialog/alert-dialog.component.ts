import { Component, Input, OnInit } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'alert-dialog',
  templateUrl: './alert-dialog.component.html',
  
})
export class AlertDialogComponent implements OnInit {

  @Input() msg:string="";

  constructor(private ngbAlert:NgbAlert) { }

  ngOnInit(): void {
  }

  close(){
    this.ngbAlert.close();
  }

}
