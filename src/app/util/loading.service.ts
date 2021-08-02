import { Injectable } from '@angular/core';
import { Observable ,BehaviorSubject,pipe, of} from 'rxjs';
import {tap,concatMap,finalize} from 'rxjs/operators'
@Injectable()
export class LoadingService {
  private loadingSubject=new BehaviorSubject<boolean>(false);
  loading$:Observable<boolean>=this.loadingSubject.asObservable();
  constructor() { 

  }

  loadingOn(){
    this.loadingSubject.next(true);
  }

  showLoadingUntillCompleted<T>(obs$:Observable<T>):Observable<T>{
    return of(null)
    .pipe(
      tap(()=>this.loadingOn()),
      concatMap(()=>obs$),finalize(()=>this.loadingOff())
    )
  }

  loadingOff(){
    this.loadingSubject.next(false);
  }
}
