import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  user:User;
  numFollowers=0;
  numFollowimgs=0;
  

 

  constructor(public userService:UserserviceService,public ar:ActivatedRoute,public router:Router,public authservice:AuthService) { }

  ngOnInit(): void {
    let id:string;
  JSON.parse(localStorage.getItem('user'));
    this.ar.params.subscribe(
      a=>{
        id=a['id']
        this.userService.getUser(  JSON.parse(localStorage.getItem('user'))._id).subscribe(
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
