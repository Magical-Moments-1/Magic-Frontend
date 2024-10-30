import { Injectable } from '@angular/core';
import { LoginModel } from '../../Models/LoginModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieManagerService } from '../Cookie/cookie-manager.service';
import { AuthenticatedResponse } from '../../Models/AuthenticatedResponse';
import { TokenApiModel } from '../../Models/TokenApiModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL:string="https://localhost:7154/api/Auth";

  constructor(private _http: HttpClient, private cookieService: CookieManagerService) { }

  login(user: LoginModel) {
    return this._http.post<AuthenticatedResponse>(this.URL, user)
  }
  refreshToken() {
    const AccessToken = this.cookieService.getCookie('AccessToken');
    const refreshToken = this.cookieService.getCookie('RefreshToken');
    return this._http.post<any>(this.URL+'/refresh', {AccessToken,refreshToken});
  }
  revoke() {
    const token = this.cookieService.getCookie('AccessToken');
    return this._http.post(this.URL + '/revoke', {}, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }
}
