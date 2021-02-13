import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { NewblogComponent } from './newblog/newblog.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { from } from 'rxjs';
import { CommentComponent } from './comment/comment.component';
import { BlogComponent } from './blog/blog.component';
import { EditblogComponent } from './editblog/editblog.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingsComponent } from './followings/followings.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { UserserviceService } from './services/userservice.service';
import { BlogserviceService } from './services/blogservice.service';
import { ShowprofileComponent } from './showprofile/showprofile.component';
import { LoggeddataComponent } from './loggeddata/loggeddata.component';
import { EdituserComponent } from './edituser/edituser.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    MyprofileComponent,
    NewblogComponent,
    HeaderComponent,
    NotfoundComponent,
    CommentComponent,
    BlogComponent,
    EditblogComponent,
    FollowersComponent,
    FollowingsComponent,
    ShowprofileComponent,
    LoggeddataComponent,
    EdituserComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [AuthGuard,AuthService,BlogserviceService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true

  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
