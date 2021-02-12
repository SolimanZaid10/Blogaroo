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
  

  follow(){
    let id=0;
    this.ar.params.subscribe(
      a=>{id=a['id']
      this.userService.follow(this.user).subscribe(
        e=>{
          this.user=e
          console.log(e)
        
        }
      )
    }

    )
    
  }
  constructor(public userService:UserserviceService,public ar:ActivatedRoute,public router:Router,public authservice:AuthService) { }

  ngOnInit(): void {
    let id:string;
  JSON.parse(localStorage.getItem('user'));
    this.ar.params.subscribe(
      a=>{
        id=a['id']
        this.userService.getUser(id).subscribe(
          d=>{
            this.user=d
            this.numFollowers=this.user.followers.length
            this.numFollowimgs=this.user.followings.length
          }
         
        )
      }
      
    )
  }

}
