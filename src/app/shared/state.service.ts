import { EventEmitter, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _user!: User;
  isLoggedIn:EventEmitter<boolean>=new EventEmitter();
  constructor() { 

  }

  
  public get user() : User {
    return this._user;
  }

  
  public set user(v : User) {
    this._user = v;
    this.isLoggedIn.emit(true);
  }
  
  


}
