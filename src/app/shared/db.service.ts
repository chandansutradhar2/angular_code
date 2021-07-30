
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Course } from '../models/course.model';
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

  getCourses():Promise<Course[]>{
    return new Promise((resolve,reject)=>{
      this.db.collection('courses').get().subscribe(r=>{
        if(r.docs){
          let courses:Course[]=[];
          r.forEach(ele=>{
              courses.push(ele.data() as Course);
          })
          resolve(courses);
        }else{
          reject('empty courses collection');
        }
      })
    });
  }

}
