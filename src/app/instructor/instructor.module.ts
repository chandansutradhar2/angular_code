import { NgModule } from '@angular/core';

import { InstructorComponent } from './instructor.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:InstructorComponent},
  
]

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),

  ],
  exports:[
    RouterModule
  ]
})
export class InstructorModule { }
