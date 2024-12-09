import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { CookieManagerService } from '../Cookie/cookie-manager.service';
import { Login } from '../../models/user.model';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor{

  URL:string="https://localhost:7154/api/Auth";

constructor(private _http: HttpClient) { }

  private token = 'your_token_value';

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      });

    return next.handle(authReq);
  }
  login(login: Login): Observable<any> {
    return this._http.post(this.URL, login);
    // var result =  this._http.post(this.URL, login)
    // result.subscribe({
    //   next: (response) => {
    //     console.log("tokenSer: " + response)
    //     return result
    //   },
    //   error: (err) => {
    //     console.error('Login error:', err);
    //     alert('Login failed. Please check your credentials and try again.');
    //     return result //err.status
    //   }
    // });
  }
  // refreshToken() {
  //   const AccessToken = this.cookieService.getCookie('AccessToken');
  //   const refreshToken = this.cookieService.getCookie('RefreshToken');
  //   return this._http.post<any>(this.URL+'/refresh', {AccessToken,refreshToken});
  // }
  // revoke() {
  //   const token = this.cookieService.getCookie('AccessToken');
  //   return this._http.post(this.URL + '/revoke', {}, {
  //     headers: new HttpHeaders({
  //       'Authorization': `Bearer ${token}`
  //     })
  //   });
  // }
}
