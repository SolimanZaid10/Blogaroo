import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../models/blog';
import { User } from '../models/user';
import { BlogserviceService } from '../services/blogservice.service';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numofLikes:number=0;
  comment:string;
  likeClick()
  {
    this.numofLikes++;
  }


  blogs:Blog[]=[];
  users:User[]=[];
  constructor(public blogService:BlogserviceService,public userservice:UserserviceService,public ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.blogService.getallBlogs().subscribe(
      blogsData=>{
        this.blogs=blogsData;
      }
    )
    this.userservice.getallUsers().subscribe(
      usersData=>{
        this.users=usersData
      }
    )
  }

  postComment(){
    let id="";
    this.ac.params.subscribe(
      a=>{
        id=a['id']
        this.blogService.postComment(id,this.comment).subscribe(
          e=>{
            e.body=this.comment
            console.log(e)
          }
        )
      }

    )

  }
  

}
