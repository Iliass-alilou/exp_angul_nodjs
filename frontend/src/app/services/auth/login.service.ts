import { User } from 'src/app/models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:3001/"
  constructor(private http: HttpClient) {}
  
  listUser:Array<User> = [];
  userSubject = new Subject<any>();
  
  insert(user){
    return this.http.post(this.url+"users",user).subscribe(rsp=>rsp)
  }

  get(){
    this.http.get<Array<User>>(this.url+"users").subscribe(users=>{
      this.listUser=users;
      this.emitUserSubject();
    })
  }

  emitUserSubject(){
    this.userSubject.next(this.listUser)
  }
}
