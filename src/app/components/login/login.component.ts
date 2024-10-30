import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../Services/Users/users.service';
import { Router } from '@angular/router';
import { Users } from '../../Models/Users';
import { LoginService } from '../../Services/Login/login.service';
import { LoginModel } from '../../Models/LoginModel';
import { CookieManagerService } from '../../Services/Cookie/cookie-manager.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,ForgotPasswordComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _loginService: LoginService, private router: Router,private cookieService: CookieManagerService) { }

  public addForm!: FormGroup;
  public user!: LoginModel

  ngOnInit(): void {
    this.addForm = new FormGroup({
      "email": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required]),
    })
  }
  submit() {
    let newUser: LoginModel = {
      email: this.addForm.value.email,
      password: this.addForm.value.password,
    }
    this._loginService.login(newUser).subscribe({
      next: (response) => {
        const token = response.accessToken;
        const refreshToken = response.refreshToken;
        if (response && response.accessToken && response.refreshToken) {
          this.cookieService.setCookie('AccessToken', response.accessToken, 30); // 30 days
          this.cookieService.setCookie('RefreshToken', response.refreshToken, 30); // 30 days
          this.router.navigate(['/question']);
        }
      },
      error: (err) => {
        console.error('Login error:', err);
        alert('Login failed. Please check your credentials and try again.');
      }
    });
  }
  
}
