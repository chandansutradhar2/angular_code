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
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    NavbarComponent,
    SearchbarComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent
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
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
