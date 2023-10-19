import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {


  API: string = 'http://localhost:8080/api/pedido';
  http = inject(HttpClient);

  constructor() { }

  findById(id: number): Observable<Pedido>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.get<Pedido>(this.API, {params: params});
  }

  listAll(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.API + "/all");
  }

  save(pedido: Pedido): Observable<string> {
    return this.http.post<string>(this.API, pedido);
  }

  edit(id: number, pedido: Pedido): Observable<string>{
    let params = new HttpParams()
      .set('id', id)

      return this.http.put<string>(this.API, pedido, { params: params});
  }

  delete(id: number): Observable<any>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.delete<any>(this.API, {params: params});
  }
}
