import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-followings',
  templateUrl: './followings.component.html',
  styleUrls: ['./followings.component.css']
})
export class FollowingsComponent implements OnInit {

  check(id:string){
    if(id==JSON.parse(localStorage.getItem('user'))._id){
      this.router.navigate(['myprofile/'+id])
    }
  }

  followings:User[]=[];
  constructor(public ar:ActivatedRoute,public router:Router,public userserice:UserserviceService) { }

  ngOnInit(): void {
    let id:string;
    this.ar.params.subscribe(
      a=>{
        id=a['id']
        this.userserice.getFollowings(id).subscribe(
          d=>{
            this.followings=d
          }
         
        )
      }
      
    )
  }

}
