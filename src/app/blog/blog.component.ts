import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../models/blog';
import { BlogserviceService } from '../services/blogservice.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog:Blog;
  constructor(public blogServ:BlogserviceService,public ar:ActivatedRoute,public router:Router) { }

  deleteBlog(){
    this.blogServ.deleteBlog(this.blog._id).subscribe(
      d=>{
          this.router.navigateByUrl("/home");
      }
    )
  }
  ngOnInit(): void {
    let id:string;
    this.ar.params.subscribe(
      a=>{
        id=a['id'];
        this.blogServ.getBlog(id).subscribe(
          d=>
          {
            this.blog=d
          }
        
        )
      }
    )
  
  }

}
