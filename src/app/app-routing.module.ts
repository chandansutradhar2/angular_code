import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './shared/auth-guard.service';
//step 1: define a routing.module.ts

//step 2: add list of routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((auth) => auth.AuthModule),
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'course',
    loadChildren: () =>
      import('./course/course.module').then((course) => course.CourseModule),
  },
  {
    path: 'instructor',
    loadChildren: () =>
      import('./instructor/instructor.module').then((m) => m.InstructorModule),
  },
  {
    path: 'admin',
    canLoad:[AuthGuardService],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

//step 3: notifying the app.module with routing capabilities
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
