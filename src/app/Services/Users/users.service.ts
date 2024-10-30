import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../../Models/Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  URL:string="https://localhost:7154/api/Users"

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

  updateUser(user: Users)
  {
    return this._http.put(this.URL, user)
  }
}
