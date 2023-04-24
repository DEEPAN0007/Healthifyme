import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Health } from './health';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  basePath = `http://localhost:8080/healthify`;

  constructor(private http:HttpClient ) { }
  getHealth():Observable<Health[]>{
    console.log("In get");
   return this.http.get<Health[]>(this.basePath);
  }
  addHealth(health:Health):Observable<Health>{
    console.log("In post");
    return this.http.post<Health>(this.basePath,health);
  }

  updateHealth(health:Health):Observable<Health>{
    console.log("In put");
    console.log(health);
    return this.http.put<Health>(this.basePath,health);
  }

  deleteHealth(userid:string):Observable<string>{
    console.log("In delete");
    return this.http.delete<string>(this.basePath+"/"+userid);
  }
}
