import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../models/blog';
import { BlogserviceService } from '../services/blogservice.service';

@Component({
  selector: 'app-loggeddata',
  templateUrl: './loggeddata.component.html',
  styleUrls: ['./loggeddata.component.css']
})
export class LoggeddataComponent implements OnInit {

  
  numofLikes:number=0;
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
  constructor(public blogService:BlogserviceService,public ar:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    let id:string;
    this.ar.params.subscribe(
      a=>{id=a['id']
      console.log(a)
    this.blogService.shoWBlogs(id).subscribe(
      e=>{
        this.blogs=e;
        console.log(e)
      }
    )
    }
    )

  }

}
