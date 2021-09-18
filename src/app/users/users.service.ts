import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from "./user.model";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<User>{
    return this.http.get<User>(environment.apiKey);
  }

  getUserById(id):Observable<User>{
    return this.http.get<User>(environment.apiKey + id)
  }

  postUsers(user:User):Observable<User>{
    return this.http.post<User>(environment.apiKey, user);
  }

  deleteUsers(id:number):Observable<User>{
    return this.http.delete<User>(`${environment.apiKey}${id}`);
  }

  putUser(user:User, id:number):Observable<User>{
    return this.http.put<User>(environment.apiKey + id, user)
  }

}
