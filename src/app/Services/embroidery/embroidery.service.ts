
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Embroidery } from '../../Models/embroidery.model';


@Injectable({
  providedIn: 'root'
})
export class EmbroideryService {
URL: string = "https://localhost:7154/api/Embroidery"
embroideryList:Embroidery[]=[];
constructor(private _http: HttpClient) { }

getEmbroideryList(): Observable<Embroidery[]> {
  return this._http.get<Embroidery[]>(this.URL)
}

addEmbroidery(embroidery: Embroidery) {
  return this._http.post(this.URL, embroidery)
}
updateEmbroidery(embroidery: Embroidery) {
  return this._http.put(`${this.URL}/${embroidery.id}`, embroidery)
}
}