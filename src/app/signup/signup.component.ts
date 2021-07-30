import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

formGrp:FormGroup;
  qualifications:string[]=[
    "SSC- Secondary",
    "HSC - Higher Secondary",
    "Diploma",
    "Graduate - Bachelor Degree",
    "Master Degree",
    "Post Graduate"
  ];
  constructor() { 
    this.formGrp=new FormGroup({
      fName: new FormControl('',[Validators.required]),
      lName: new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.email,Validators.required]),
      mobileNo:new FormControl('',[Validators.minLength(4),Validators.maxLength(12)]),
      password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern(/([a-zA-Z0-9!@#$%^&*])+/)]),
      qualification:new FormControl(''),
      employed:new FormControl(''),
      companyName:new FormControl(''),
      role:new FormControl('student',Validators.required)
    })
    this.formGrp.controls['companyName'].disable();
    //this.formGrp.controls['fName'].touched
    this.formGrp.controls['employed'].valueChanges.subscribe((val)=>{
      console.log(val);
      val=="true"?this.formGrp.controls['companyName'].enable():this.formGrp.controls['companyName'].disable()
    })
  }

  get form(){
    return this.formGrp.controls;
  }
  ngOnInit(): void {
    console.log(this.form);

  }


  submit(){
    console.log(this.formGrp.value);
    if(this.formGrp.invalid){
      alert('form is incomplete. please correct error and resubmit');
      return;
    }else{
      alert('form submitted successfully');
      this.formGrp.reset();
      this.formGrp.controls['role'].setValue('student');

    }
    
  }
}
