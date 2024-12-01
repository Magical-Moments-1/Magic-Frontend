import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../Models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  URL: string = "https://localhost:7154/api/category"
  topCategories: Category[] = [];
    constructor(private _http: HttpClient) { }
  
    getCategoryList(): Observable<Category[]> {
      return this._http.get<Category[]>(this.URL)
    }
  
    getCategoryById(id: string): Observable<Category> {
      return this._http.get<Category>(`${this.URL}/${id}`)
    }
  
    addCategory(category: Category) {
      return this._http.post(this.URL, category)
    }
    updateCategory(category: Category) {
      return this._http.put(`${this.URL}/${category.id}`, category)
    }
    getTopCategories(){
      this._http.get<Category[]>(`${this.URL}/top`).subscribe({
        next: (data) => {
          this.topCategories = data;
        },
        error: (err) => {
          console.error('Error:', err);
        }
      })
    }

  }
  
