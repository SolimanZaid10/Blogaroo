import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';
import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {

  getallBlogs(){
    return this.http.get<Blog[]>("http://localhost:4000/");
  }

  getBlog(id:string){
    return this.http.get<Blog>("http://localhost:4000/blogs/"+id);
  }

  deleteBlog(id:string){
    return this.http.delete<Blog>("http://localhost:4000/blogs/"+id);
  }

  editBlog(blog:Blog){
    return this.http.patch<Blog>("http://localhost:4000/blogs/edit/"+blog._id,blog)
  }

  postblog(blog:any){
    return this.http.post<Blog>("http://localhost:4000/blogs/add",blog)
  }

  postComment(id:string,body:string){
    console.log(id)
    return this.http.post<Comment>("http://localhost:4000/blogs/comment/"+id,{body})

  }


  
  

  constructor(public http:HttpClient) { }
}
