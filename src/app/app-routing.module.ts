import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BlogComponent } from './blog/blog.component';
import { CommentComponent } from './comment/comment.component';
import { EditblogComponent } from './editblog/editblog.component';
import { EdituserComponent } from './edituser/edituser.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingsComponent } from './followings/followings.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { NewblogComponent } from './newblog/newblog.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthService } from './services/auth.service';
import { ShowprofileComponent } from './showprofile/showprofile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  
  {path:"myprofile/:id",component:MyprofileComponent,canActivate:[AuthGuard]},
  {path:"home",component:HomeComponent},
  {path:"users/login",component:LoginComponent},
  {path:"users/signup",component:SignupComponent},
  {path:"users/edit/:id",component:EdituserComponent},
  {path:"newblog",component:NewblogComponent,canActivate:[AuthGuard]},
  {path:"blogs/:id",component:BlogComponent,canActivate:[AuthGuard]},
  {path:"blogs/comment/:id",component:CommentComponent,canActivate:[AuthGuard]},
  {path:"blogs/edit/:id",component:EditblogComponent,canActivate:[AuthGuard]},
  {path:"users/followers/:id",component:FollowersComponent,canActivate:[AuthGuard]},
  {path:"users/followings/:id",component:FollowingsComponent,canActivate:[AuthGuard]},
  {path:"profile/:id",component:ShowprofileComponent},
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:"**",component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 