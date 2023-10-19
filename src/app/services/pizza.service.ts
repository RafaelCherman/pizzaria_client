import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  API: string = 'http://localhost:8080/api/pizzas';
  http = inject(HttpClient);

  constructor() { }

  findById(id: number): Observable<Pizza>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.get<Pizza>(this.API, {params: params});
  }

  listAll(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.API + "/all");
  }

  save(pizza: Pizza): Observable<string> {
    return this.http.post<string>(this.API, pizza);
  }

  edit(id: number, pizza: Pizza): Observable<string>{
    let params = new HttpParams()
      .set('id', id)

      return this.http.put<string>(this.API, pizza, { params: params});
  }

  delete(id: number): Observable<any>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.delete<any>(this.API, {params: params});
  }
}
