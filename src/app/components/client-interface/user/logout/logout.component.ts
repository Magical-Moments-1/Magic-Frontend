// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../../../../‏‏services/auth/auth.service';

// @Component({
//   selector: 'app-logout',
//   standalone: true,
//   imports: [],
//   templateUrl: './logout.component.html',
//   styleUrl: './logout.component.css'
// })
// export class LogoutComponent {

//   constructor(private _loginService: AuthService, private router: Router){}
//   logout() {
//     this._loginService.revoke().subscribe({
//       next: () => {
//         this.cookieService.deleteCookie('AccessToken');
//         this.cookieService.deleteCookie('RefreshToken');
//         this.router.navigate(['']); 
//       },
//       error: (err) => {
//         console.error('Logout error:', err);
//       }
//     });
//   }
// }
