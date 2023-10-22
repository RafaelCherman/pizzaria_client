import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Resposta } from '../models/resposta';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  API: string = 'http://localhost:8080/api/cliente';
  http = inject(HttpClient);

  constructor() { }

  findById(id: number): Observable<Cliente>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.get<Cliente>(this.API, {params: params});
  }

  listAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API + "/all");
  }

  save(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API, cliente);
  }

  edit(id: number, cliente: Cliente): Observable<Cliente>{
    let params = new HttpParams()
      .set('id', id)

      return this.http.put<Cliente>(this.API, cliente, { params: params});
  }

  delete(id: number): Observable<Resposta>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.delete<Resposta>(this.API, {params: params});
  }

}
