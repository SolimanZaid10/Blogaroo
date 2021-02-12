import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers:User[]=[];
  constructor(public http:HttpClient,public ar:ActivatedRoute,public router:Router,public userserice:UserserviceService) { }

  ngOnInit(): void {
    let id:string;
    this.ar.params.subscribe(
      a=>{
        id=a['id']
        this.userserice.getFollowers(id).subscribe(
          d=>{
            this.followers=d
          }
         
        )
      }
      
    )
  }

}
