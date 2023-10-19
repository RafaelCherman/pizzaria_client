import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizzatipo } from '../models/pizzatipo';

@Injectable({
  providedIn: 'root'
})
export class PizzatipoService {

  API: string = 'http://localhost:8080/api/pizza_tipo';
  http = inject(HttpClient);

  constructor() { }

  findById(id: number): Observable<Pizzatipo>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.get<Pizzatipo>(this.API, {params: params});
  }

  listAll(): Observable<Pizzatipo[]> {
    return this.http.get<Pizzatipo[]>(this.API + "/all");
  }

  save(pizzaTipo: Pizzatipo): Observable<string> {
    return this.http.post<string>(this.API, pizzaTipo);
  }

  edit(id: number, pizzaTipo: Pizzatipo): Observable<string>{
    let params = new HttpParams()
      .set('id', id)

      return this.http.put<string>(this.API, pizzaTipo, { params: params});
  }

  delete(id: number): Observable<any>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.delete<any>(this.API, {params: params});
  }
}
