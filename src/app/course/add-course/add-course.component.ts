import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  formGrp: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGrp = fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['',[Validators.required,Validators.min(1)]],
      price:  ['',[Validators.required,Validators.min(1)]],
      deliveryMode: '',
    });
  }

  ngOnInit(): void {}

  save(){
    
  }
}
