import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../../Models/Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users!:Users

  constructor(private _http: HttpClient) { }

  
  getUsersList(): Observable<Users[]> {
    return this._http.get<Users[]>('https://localhost:7154/api/Users')
  }

  getUserById(id: string): Observable<Users> {
    return this._http.get<Users>(`https://localhost:7154/api/Users${id}`)
  }
 
  addUser(user: Users) {
    return this._http.post('https://localhost:7154/api/Users', user)
    
  }

  updateUser(user: Users)
  {
    return this._http.put('https://localhost:7154/api/Users', user)
  }
}
