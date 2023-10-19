import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Produtodiverso } from '../models/produtodiverso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutodiversoService {

  API: string = 'http://localhost:8080/api/produto_diverso';
  http = inject(HttpClient);

  constructor() { }

  findById(id: number): Observable<Produtodiverso>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.get<Produtodiverso>(this.API, {params: params});
  }

  listAll(): Observable<Produtodiverso[]> {
    return this.http.get<Produtodiverso[]>(this.API + "/all");
  }

  save(produto: Produtodiverso): Observable<string> {
    return this.http.post<string>(this.API, produto);
  }

  edit(id: number, produto: Produtodiverso): Observable<string>{
    let params = new HttpParams()
      .set('id', id)

      return this.http.put<string>(this.API, produto, { params: params});
  }

  delete(id: number): Observable<any>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.delete<any>(this.API, {params: params});
  }
}
