import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) { 

  }

  isAuthenticated():Observable<any>{
    return new Observable((obs)=>{
      this.auth.onAuthStateChanged((user)=>{
        if(user){
          obs.next(user)
        }else{
          obs.error('not logged in')
        }
      })
    })
  }

  signIn(email:string,password:string):Promise<string>{
    return new Promise((resolve,reject)=>{
      this.auth.signInWithEmailAndPassword(email,password).then(r=>{
        if(r !==null && r.user !==null){
          resolve(r.user?.uid);
        }else{
          reject('invalid credentials');
        }
      }).catch(err=>{
        console.log(err);
        reject('invalid credentials');
      })
    })
    
  }

  signOut(){
    return this.auth.signOut();
  }

  signUp(email:string,password:string):Promise<string>{
    return new Promise((resolve,reject)=>{
      this.auth.createUserWithEmailAndPassword(email,password).then(res=>{
        res.user?resolve(res.user?.uid):reject('error creating user');
      }).catch(err=>reject('error creating user'));
    })
    //code to comminicate n save with rest api
  }

  resetPassword(){

  }


}
