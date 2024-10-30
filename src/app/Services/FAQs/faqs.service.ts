import { Injectable } from '@angular/core';
import { FAQs } from '../../Models/FAQs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {
  public question!: FAQs
  URL: string = "https://localhost:7154/api/FAQs"
  constructor(private _http: HttpClient) { }

  getQuestionList(): Observable<FAQs[]> {
    return this._http.get<FAQs[]>(this.URL)
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
