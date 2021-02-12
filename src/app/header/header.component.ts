import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:User;

  to(){
    this.router.navigate(['myprofile/id']);
  }

  constructor(public userservice:UserserviceService,public ar:ActivatedRoute,public router:Router,public authservice:AuthService) { }

  ngOnInit(): void {
  }

}
