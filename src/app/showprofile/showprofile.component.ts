import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-showprofile',
  templateUrl: './showprofile.component.html',
  styleUrls: ['./showprofile.component.css']
})
export class ShowprofileComponent implements OnInit {
  user:User;
  numFollowers=0;
  numFollowimgs=0;
  following;

  follow(){
    this.following=1;
        this.userService.follow(this.user).subscribe(
            e=>{
              
              console.log(e)
            }
          )
        
      }
  unfollow(){
  this.following=0;
    this.userService.unfollow(this.user).subscribe(
        e=>{
          
          console.log(e)
        }
      )
    
  }
  constructor(public userService:UserserviceService,public ar:ActivatedRoute,public router:Router,public authservice:AuthService) { }
 id:string;
  ngOnInit(): void {
  
  JSON.parse(localStorage.getItem('user'));
    this.ar.params.subscribe(
      a=>{
        this.id=a['id']
        this.userService.getUser(this.id).subscribe(
          d=>{
            this.user=d
            this.numFollowers=this.user.followers.length
            this.numFollowimgs=this.user.followings.length
            if(this.user.followers.includes(JSON.parse(localStorage.getItem('user'))._id)){
              this.following=1;
            }else{
              this.following=0;
            }
          }
         
        )
      }
      
    )
  }

}
