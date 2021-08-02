import { EventEmitter, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _user!: User;
  private _course!:Course;
  isLoggedIn:EventEmitter<boolean>=new EventEmitter();
  constructor() { 

  }

  
  public get course() : Course {
    return this._course;
  }
  
  
  public set course(v : Course) {
    this._course = v;
  }
  
  
  public get user() : User {
    return this._user;
  }

  
  public set user(v : User) {
    this._user = v;
    this.isLoggedIn.emit(true);
  }
  
  


}
