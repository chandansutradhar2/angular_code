import { NgModule } from '@angular/core';

import { CourseComponent } from './course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
    {path:'',component:CourseComponent},
    {path:'add-course',component:AddCourseComponent}
]

@NgModule({
    declarations: [
        CourseComponent,AddCourseComponent,AlertDialogComponent
    ],
    imports: [ SharedModule,RouterModule.forChild(routes) ],
    exports: [RouterModule],
    providers: [],
})
export class CourseModule {}