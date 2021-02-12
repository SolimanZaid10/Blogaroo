import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserserviceService } from '../services/userservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: String;
  data: String;

  isValied(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  login() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        data => {
          console.log(data)
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate(['/home'])
        },
        err => this.error = 'Could not authenticate'

      )
    }
  }

  constructor(public auth: AuthService, public ar: ActivatedRoute, public router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }

}
