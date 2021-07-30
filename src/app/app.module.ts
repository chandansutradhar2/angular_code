import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SecondComponent } from './second/second.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AlertDialogComponent } from './util/alert-dialog/alert-dialog.component';
import { NgbModule,NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CourseComponent } from './course/course.component';
import { InstructorComponent } from './instructor/instructor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    NavbarComponent,
    SearchbarComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    AlertDialogComponent,
    HomeComponent,
    AboutusComponent,
    CourseComponent,
    InstructorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAM2qZmv1JVY8IApv-PFVoO0Ho3LSznv7o",
      authDomain: "angular-lms-d1143.firebaseapp.com",
      projectId: "angular-lms-d1143",
      storageBucket: "angular-lms-d1143.appspot.com",
      messagingSenderId: "580941436901",
      appId: "1:580941436901:web:4fd2495391b3f40d16810c"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule,
    NgbAlertModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
