import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
productList : Product[] = [];
rate: number = 0
URL: string = "https://localhost:7154/api/product"
currency:string = "₪";

  constructor(private _http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this._http.get<Product[]>(this.URL)
  }

  getProductById(id: string): Observable<Product> {
    return this._http.get<Product>(`${this.URL}/${id}`)
  }

  addProduct(product: Product) {
    return this._http.post(this.URL, product)
  }
  updateProduct(product: Product) {
    return this._http.put(`${this.URL}/${product.id}`, product)
  }
  getProductsByCatId(id: string) : Observable<Product []> {
    return this._http.get<Product[]>(`${this.URL}/category/${id}`)
  }
  getRate(): Observable<any>{
    return this._http.get(`${this.URL}/rate`)
  }
  getRelatives(id:string): Observable<any>{
    return this._http.get(`${this.URL}/relatives/${id}`)
  }
  checkStack = (prod: Product):boolean=>{
    return prod.quantity.some(e => e.qty && e.qty > 0);
  }
}


