import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  submittedRegister(body:User){
    return this.http.post<User>("http://localhost:4000/users/register", body);

  }

  login(body:User){
    return this.http.post<User>("http://localhost:4000/users/login", body);

  }
  
  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/users/login'])
  }


  constructor(public http:HttpClient,public router:Router) { }
}
