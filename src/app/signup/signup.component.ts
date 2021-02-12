import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../models/student'
import { AuthService } from '../services/auth.service';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

myForm:FormGroup;
sucessmasg="";
error:String;


  isValied(controlName){
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }
  register(){
    console.log(this.myForm.value)
    if(this.myForm.valid){
    this.auth.submittedRegister(this.myForm.value)
    .subscribe(
      data =>this.sucessmasg= " Registration success ",
      err => {
        const sd=err.error.err.keyValue
       const valerror=Object.entries(sd)[0][0];
      }

    );
    }
  }
  constructor(public auth:AuthService) { 
    this.myForm=new FormGroup({
      firstName: new FormControl(null,[
        Validators.required,
        Validators.min(3),
        Validators.maxLength(20),
        Validators.pattern(/[A-Za-z]/),
      ]),
      lastName: new FormControl(null,[
        Validators.required,
        Validators.min(3),
        Validators.maxLength(20),
        Validators.pattern(/[A-Za-z]/),

      ]),
      email:new FormControl(null,[
        Validators.required,
      ]),
      username: new FormControl(null,[
        Validators.required,
        Validators.min(3),
        Validators.maxLength(20),
      ]),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(''),
      ]),

    })
  }

  ngOnInit(): void {
  }

}