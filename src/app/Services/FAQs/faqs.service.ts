import { Injectable } from '@angular/core';
import { FAQs } from '../../Models/FAQs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieManagerService } from '../Cookie/cookie-manager.service';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {
  public question!: FAQs
  URL: string = "https://localhost:7154/api/FAQs"
  constructor(private _http: HttpClient,private cookieService: CookieManagerService) { }

  getQuestionList(): Observable<FAQs[]> {
    const AccessToken = this.cookieService.getCookie('AccessToken');
    return this._http.get<FAQs[]>(this.URL, { headers: new HttpHeaders({
      'Authorization': `Bearer ${AccessToken}`
    })
  })
  }

  // getRecipeById(id: number): Observable<FAQs> {
  //   return this._http.get<FAQs>(`https://localhost:7020/api/Recipe/${id}`)
  // }

  // addRecipe(recipe: FAQs) {
  //   return this._http.post('https://localhost:7020/api/Recipe', recipe)  
  // }

  // updateRecipe(recipe: FAQs,id: number) {
  //   return this._http.put(`https://localhost:7020/api/Recipe/${id}`, recipe)
  // }

  // deleteRecipe(id:number) {
  //   return this._http.delete(`https://localhost:7020/api/Recipe/${id}`)
  // }
}
