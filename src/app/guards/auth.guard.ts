
// import { CanActivateFn } from '@angular/router';

// import { HttpClient } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { CookieManagerService } from '../services/Cookie/cookie-manager.service';


// export const authGuard: CanActivateFn = async (route, state) => {
//   const cookieService = inject(CookieManagerService);
//   const http = inject(HttpClient);
//   const token = cookieService.getCookie('AccessToken');

//   const isRefreshSuccess = await tryRefreshingTokens(token, http, cookieService);
//   return isRefreshSuccess;
// };

// const tryRefreshingTokens = async (token: string | null, http: HttpClient, cookieService: CookieManagerService): Promise<boolean> => {
//   const refreshToken: string | null = cookieService.getCookie("RefreshToken");
//   if (!token || !refreshToken) {
//     return false;
//   }

//   try {
//     const loginService = inject(auService);
//     const refreshRes = await loginService.refreshToken().toPromise();
//     if (refreshRes && refreshRes.accessToken && refreshRes.refreshToken) {
//       cookieService.setCookie('AccessToken', refreshRes.accessToken, 30); // Update access token
//       cookieService.setCookie('RefreshToken', refreshRes.refreshToken, 30); // Update refresh token
//       return true; // Success
//     }
//   } catch (error) {
//     console.error('Error refreshing tokens:', [error]);
//   }
//   return false; // if we failed to refresh the token
// };
