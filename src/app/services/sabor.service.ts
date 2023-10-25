import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Sabor } from '../models/sabor';
import { Resposta } from '../models/resposta';

@Injectable({
  providedIn: 'root'
})
export class SaborService {

  API: string = 'http://localhost:8080/api/sabor';
  http = inject(HttpClient);

  constructor() { }

  findById(id: number): Observable<Sabor>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.get<Sabor>(this.API, {params: params});
  }

  listAll(): Observable<Sabor[]> {
    return this.http.get<Sabor[]>(this.API + "/all");
  }

  listAtivo(): Observable<Sabor[]> {
    return this.http.get<Sabor[]>(this.API + "/ativo");
  }

  save(sabor: Sabor): Observable<Sabor> {
    return this.http.post<Sabor>(this.API, sabor);
  }

  edit(id: number, sabor: Sabor): Observable<Sabor>{
    let params = new HttpParams()
      .set('id', id)

      return this.http.put<Sabor>(this.API, sabor, { params: params});
  }

  delete(id: number): Observable<Resposta>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.delete<Resposta>(this.API, {params: params});
  }

}
