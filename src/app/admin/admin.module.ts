import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes:Routes=[
  {path:'', component:AdminHomeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
  
})
export class AdminModule { }
