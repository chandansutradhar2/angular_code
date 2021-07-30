import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styles: [``],
})
export class AlertDialogComponent implements OnInit {
  
  
  constructor( public dialogRef: MatDialogRef<AlertDialogComponent>) {}

  ngOnInit(): void {}

  onNoClick() {
    console.log('no clicked');
    this.dialogRef.close(false);
  }

  onYesClick() {
    this.dialogRef.close(true);
  }
}
