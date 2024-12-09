import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../‏‏services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _aythService: AuthService, private router: Router) { }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'), Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  })

  handleLogin() {
    if (this.loginForm.valid) {
      this._aythService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log("token: " + response.token)
          //handle the token stored

          // let c = response.token;
          //const token = response.accessToken;
          // const refreshToken = response.refreshToken;
          // if (response && response.accessToken && response.refreshToken) {
          //   this.cookieService.setCookie('AccessToken', response.accessToken, 30); // 30 days
          //   this.cookieService.setCookie('RefreshToken', response.refreshToken, 30); // 30 days
          //   this.router.navigate(['/question']);
          // }
        },
        error: (err) => {
          debugger
          console.error('Login error:', err);
          alert('Login failed. Please check your credentials and try again.');
          //why? - mail / password in correct
          //- server error connection
        }
      });
    }
    else {
      this.loginForm.markAllAsTouched();
    }
  }
}
