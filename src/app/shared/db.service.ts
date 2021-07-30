
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private db:AngularFirestore) { }

  createUser(user:User){
    return this.db.collection('users').doc(user.uid).set(user);
  }

  getUserById(uid:string):Promise<User>{
    return new Promise((resolve,reject)=>{
      this.db.collection('users').doc(uid).get().subscribe(r=>{
        r.exists?resolve(r.data() as User):reject('unable to fetch user');
      })
    })

  }


}
