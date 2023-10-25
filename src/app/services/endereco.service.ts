import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../models/endereco';
import { end } from '@popperjs/core';
import { Resposta } from '../models/resposta';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  
  API: string = 'http://localhost:8080/api/endereco';
  http = inject(HttpClient);

  constructor() { }

  findById(id: number): Observable<Endereco>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.get<Endereco>(this.API, {params: params});
  }

  listAll(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.API + "/all");
  }

  listAtivo(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.API + "/ativo");
  }

  listByCliente(id: number): Observable<Endereco[]> {
    let params = new HttpParams()
      .set('id', id)
    return this.http.get<Endereco[]>(this.API + "/cliente", {params: params});
  }


  save(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(this.API, endereco);
  }

  edit(id: number, endereco: Endereco): Observable<Endereco>{
    let params = new HttpParams()
      .set('id', id)

      return this.http.put<Endereco>(this.API, endereco, { params: params});
  }

  delete(id: number): Observable<Resposta>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.delete<Resposta>(this.API, {params: params});
  }

}
