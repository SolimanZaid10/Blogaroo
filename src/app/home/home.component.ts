import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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


  check(id:string){
    if(id==JSON.parse(localStorage.getItem('user'))._id){
      this.router.navigate(['myprofile/'+id])
    }
  }


  blogs:Blog[]=[];
  users:User[]=[];
  constructor(public blogService:BlogserviceService,public userservice:UserserviceService,public ac:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.blogService.getallBlogs().subscribe(
      blogsData=>{
        this.blogs=blogsData;
      }
    )

  }

  postComment(id:any){
    this.blogService.postComment(id,this.comment).subscribe(
      e=>{
        e.body=this.comment
        console.log(e)
      }
    )
  }
  

}
