import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../models/blog';
import { BlogserviceService } from '../services/blogservice.service';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {

  
  editedBlog:Blog;
  edit(){
    this.blogSer.editBlog(this.editedBlog).subscribe(
      a=>{
        this.router.navigate(['/home'])
      }
    )
  }
  constructor(public blogSer:BlogserviceService,public ar:ActivatedRoute,public router:Router) { }

 
  ngOnInit(): void {
    let id:string;
    this.ar.params.subscribe(
      a=>{
        id=a['id']
        this.blogSer.getBlog(id).subscribe(
          b=>{
            this.editedBlog=b
          }
        )
      }
    )
  }

}
