import { Component } from '@angular/core';
import { LoginService } from '../../Services/Login/login.service';
import { CookieManagerService } from '../../Services/Cookie/cookie-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(private _loginService: LoginService,private router: Router,private cookieService: CookieManagerService){}
  logout() {
    this._loginService.revoke().subscribe({
      next: () => {
        this.cookieService.deleteCookie('AccessToken');
        this.cookieService.deleteCookie('RefreshToken');
        this.router.navigate(['']); 
      },
      error: (err) => {
        console.error('Logout error:', err);
      }
    });
  }
}
