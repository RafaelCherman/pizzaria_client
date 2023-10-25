import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizzatipo } from '../models/pizzatipo';
import { Resposta } from '../models/resposta';

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

  listAtivo(): Observable<Pizzatipo[]> {
    return this.http.get<Pizzatipo[]>(this.API + "/ativo");
  }

  save(pizzaTipo: Pizzatipo): Observable<|Pizzatipo> {
    return this.http.post<Pizzatipo>(this.API, pizzaTipo);
  }

  edit(id: number, pizzaTipo: Pizzatipo): Observable<Pizzatipo>{
    let params = new HttpParams()
      .set('id', id)

      return this.http.put<Pizzatipo>(this.API, pizzaTipo, { params: params});
  }

  delete(id: number): Observable<Resposta>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.delete<Resposta>(this.API, {params: params});
  }
}
