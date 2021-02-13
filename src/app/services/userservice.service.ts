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

  editUser(user:User){
    return this.http.patch<User>("http://localhost:4000/users/edit/"+user._id,user)
  }
  
  getFollowings(id:string){
    return this.http.get<User[]>("http://localhost:4000/users/followings/"+id)
  }

  getFollowers(id:string){
    return this.http.get<User[]>("http://localhost:4000/users/followers/"+id)
  }

  deleteUser(id:any){
    return this.http.delete("http://localhost:4000/users/"+id)
  }

  follow(user:User){
    return this.http.post<User>("http://localhost:4000/users/follow/"+user._id,{})
  }

  unfollow(user:User){
      return this.http.post<User>("http://localhost:4000/users/unfollow/"+user._id,{})
  }


  constructor(public http:HttpClient) { }
}
