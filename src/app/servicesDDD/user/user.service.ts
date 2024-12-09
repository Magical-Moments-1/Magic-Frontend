import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { concat, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL: string = "https://localhost:7154/api/User"

  constructor(private _http: HttpClient) { }


  getUsersList(): Observable<User[]> {
    return this._http.get<User[]>(this.URL)
  }

  getUserById(id: string): Observable<User> {
    return this._http.get<User>(`${this.URL}/${id}`)
  }

  addUser(user: User) {
    return this._http.post(this.URL, user)
  }
  updateUser(user: User) {
    return this._http.put(`${this.URL}/${user.id}`, user)
  }

  passwordResetLink(email: string) :Observable<any> {
    return this._http.post(`${this.URL}/password-reset-link`, {value: email})
}
  passwordReset(password: string, token: string) :Observable<any> {
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
    return this._http.put(`${this.URL}/password-reset`, {value: password}, {headers: headers})
  }

}
