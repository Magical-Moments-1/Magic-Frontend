import { Injectable } from '@angular/core';
import { LoginModel } from '../../Models/LoginModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL:string="https://localhost:7154/api/Auth";

  constructor(private _http: HttpClient) { }

  // login(user: LoginModel) {
  //   console.log(user);
  //   return this._http.post(this.URL, user)
  // }

  login(user: LoginModel) {
    return this._http.post<any>(this.URL, user)
  }
}
