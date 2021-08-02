
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { User } from '../models/user.model';
import { LoadingService } from '../util/loading.service';

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

  getCourses(){
    return this.db.collection('courses').valueChanges();  
    // return new Promise((resolve,reject)=>{
    //   this.db.collection('courses').get().subscribe(r=>{
    //     if(r.docs){
    //       let courses:Course[]=[];
    //       r.forEach(ele=>{
    //           courses.push(ele.data() as Course);
    //       })
    //       resolve(courses);
    //     }else{
    //       reject('empty courses collection');
    //     }
    //   })
    // });
  }

  addCourse(course:Course){
    return this.db.collection('courses').add(course);
  }

  getCourseByName(name:string):Promise<Course>{
    return new Promise((resolve,reject)=>{
      
    return this.db.collection('courses',ref=>ref.where('name','==',name)).get().subscribe(r=>{
      if(r.empty){
        reject();
      }else{
       resolve(r.docs[0].data()as Course); 
      }
    });
    });
  }
}

