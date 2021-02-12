import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

 
  getallUsers(){
    return this.http.get<User[]>("http://localhost:4000/users");
  }


  getUser(id:string){
    return this.http.get<User>("http://localhost:4000/users/"+id);
  }
  
  getFollowings(id:string){
    return this.http.get<User[]>("http://localhost:4000/users/followings/"+id)
  }

  getFollowers(id:string){
    return this.http.get<User[]>("http://localhost:4000/users/followers/"+id)
  }

  follow(user:User){
    const usfollow=user.followers.includes(JSON.parse(localStorage.getItem('user'))._id)
    return this.http.post<User>("http://localhost:4000/users/follow/",user._id,{})
  }

  unfollow(user:User){
    for (let i = 0; i <user.followers.length; i++) {
     console.log(user.followers[i])
     console.log(user._id)
     if(JSON.parse(localStorage.getItem('user'))._id===user.followers[i]){

     }else{
      return this.http.post<User>("http://localhost:4000/users/follow/",user._id,{})

     }
     
    }
   
  }


  constructor(public http:HttpClient) { }
}
