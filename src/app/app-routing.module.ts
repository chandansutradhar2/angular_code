import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { InstructorComponent } from './instructor/instructor.component';
import { AuthGuardService } from './shared/auth-guard.service';
//step 1: define a routing.module.ts

//step 2: add list of routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(auth=>auth.AuthModule)},
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'course',
    loadChildren:()=>import('./course/course.module').then(course=>course.CourseModule)
  },
  {
    path: 'instructor',
    component: InstructorComponent,
    canActivate:[AuthGuardService]
  },
];

//step 3: notifying the app.module with routing capabilities
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
