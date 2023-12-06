import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  subscribe() {
    throw new Error('Method not implemented.');
  }
  baseUrl= "http://localhost:3001/";
  constructor(private http: HttpClient) { }
  loginUser(userDetails:any) {
    return this.http.post(this.baseUrl+"user/login",userDetails);
  }
  addUser(userDetails:any) {
    return this.http.post(this.baseUrl+"user/register", userDetails);
  }
}
