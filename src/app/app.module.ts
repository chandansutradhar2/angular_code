import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SecondComponent } from './second/second.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FooterComponent } from './footer/footer.component';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { NgbModule,NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InstructorComponent } from './instructor/instructor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './util/loading/loading.component';
import { DisplayNameComponent } from './display-name/display-name.component';

import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    NavbarComponent,
    SearchbarComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    
    LoadingComponent,
    DisplayNameComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAM2qZmv1JVY8IApv-PFVoO0Ho3LSznv7o",
      authDomain: "angular-lms-d1143.firebaseapp.com",
      projectId: "angular-lms-d1143",
      storageBucket: "angular-lms-d1143.appspot.com",
      messagingSenderId: "580941436901",
      appId: "1:580941436901:web:4fd2495391b3f40d16810c"
    }),
    SharedModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
          
      }
  }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
