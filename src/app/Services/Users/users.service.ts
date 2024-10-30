import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../../Models/Users';
import { Observable } from 'rxjs';
import { EmailVerificationPostModel } from '../../Models/EmailVerificationPostModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  URL: string = "https://localhost:7154/api/Users"

  constructor(private _http: HttpClient) { }


  getUsersList(): Observable<Users[]> {
    return this._http.get<Users[]>(this.URL)
  }

  getUserById(id: string): Observable<Users> {
    return this._http.get<Users>(this.URL + '/' + id)
  }

  addUser(user: Users) {
    return this._http.post(this.URL, user)

  }
  sentLink(email: EmailVerificationPostModel) {
    return this._http.post('https://localhost:7154/api/Users/Send-link', email)
  }
  updateUser(user: Users) {
    return this._http.put(this.URL, user)
  }
}
