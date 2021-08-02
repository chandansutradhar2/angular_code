import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ROLE } from '../models/user.model';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements  CanLoad{

  constructor(private stateSvc:StateService) { }
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    if(this.stateSvc.user.role==ROLE.admin){
      return true;
    }else{
      return false;
    }
    // return new Observable((obs)=>{
    //   this.stateSvc.isLoggedIn.subscribe(r=>{
    //     if(r){
    //       return this.stateSvc.user.role==ROLE.admin?obs.next(true):obs.next(false);
    //     }else{
    //       return obs.next(false);
    //     }
    //   })  
    // })
  }
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
  //   return true;
  // }
}
