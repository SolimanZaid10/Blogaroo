import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  editUser:User;
  edit(){
    this.userserrvice.editUser(this.editUser).subscribe(
      a=>{
        this.router.navigate(['/myprofile/'+this.editUser._id])
      }
    )
  }
  constructor(public userserrvice:UserserviceService,public ar:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    let id:string;
    this.ar.params.subscribe(
      a=>{
        id=a['id']
        this.userserrvice.getUser(id).subscribe(
          b=>{
            this.editUser=b
          }
        )
      }
    )
  }

}
