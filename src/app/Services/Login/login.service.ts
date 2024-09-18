import { Injectable } from '@angular/core';
import { LoginModel } from '../../Models/LoginModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }
  login(user: LoginModel) {
    console.log(user);
    return this._http.post('https://localhost:7154/api/Auth', user)
    
  }
}
