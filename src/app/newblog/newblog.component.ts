import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from '../models/blog';
import { BlogserviceService } from '../services/blogservice.service';

@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.css']
})
export class NewblogComponent implements OnInit {
  newblog: FormGroup;
  blog: Blog = new Blog();  
  formData = new FormData();


  constructor(private http: HttpClient, public fb: FormBuilder, public blogservice: BlogserviceService, public router: Router) {
    this.newblog = this.fb.group({
      title: [''],
      body: [''],
      blogImage: [''],
      tags: []
    });

  }

  ngOnInit(): void {
  }

  imgInput(files: any) {
    this.newblog.get('blogImage').setValue(files.item(0));
  }

  AddOne() {

    this.formData.append('title', this.newblog.get('title').value);
    this.formData.append('body', this.newblog.get('body').value);
    this.formData.append('blogImage', this.newblog.get('blogImage').value)
    this.formData.append('tags', this.newblog.get('tags').value)
    console.log(this.newblog.get('blogImage').value)
    this.blogservice.postblog(this.formData).subscribe(
      a => {
        console.log(a);
        this.router.navigateByUrl('home');
      },
      err => {
        console.log(err);
      })
  }
  
 

}
