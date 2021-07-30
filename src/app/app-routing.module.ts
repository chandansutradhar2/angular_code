import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { InstructorComponent } from './instructor/instructor.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
//step 1: define a routing.module.ts

//step 2: add list of routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },{
    path:'aboutus',
    component:AboutusComponent  
  },
  {
    path:'course',
    component:CourseComponent
  },
  {
    path:'instructor',
    component:InstructorComponent
  }
];

//step 3: notifying the app.module with routing capabilities
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
