import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FAQ } from '../../models/faq.model';
import { CookieManagerService } from '../Cookie/cookie-manager.service';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  public question!: FAQ
  URL: string = "https://localhost:7154/api/FAQs"
  constructor(private _http: HttpClient,private cookieService: CookieManagerService) { }

  getQuestionList(): Observable<FAQ[]> {
    const AccessToken = this.cookieService.getCookie('AccessToken');
    return this._http.get<FAQ[]>(this.URL, { headers: new HttpHeaders({
      'Authorization': `Bearer ${AccessToken}`
    })
  })
  }
}
