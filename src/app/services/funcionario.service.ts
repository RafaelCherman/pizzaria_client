import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Pizza} from "../models/pizza";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Funcionario} from "../models/funcionario";
import {Pedido} from "../models/pedido";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  API: string = 'http://localhost:8080/api/funcionario';
  http = inject(HttpClient);

  constructor() { }
  findById(id: number): Observable<Funcionario>{
    let params = new HttpParams()
      .set('id', id)

    return this.http.get<Funcionario>(this.API, {params: params});
  }

  listAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.API + "/all");
  }

  save(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.API, funcionario);
  }
  edit(id: number, funcionario: Funcionario): Observable<Funcionario>{
    let params = new HttpParams()
      .set('id', id)

    return this.http.put<Funcionario>(this.API, funcionario, { params: params});
  }
  delete(id: number): Observable<Funcionario>{
    let params = new HttpParams()
      .set('id', id)

    return this.http.delete<Funcionario>(this.API, {params: params});
  }

  listAtivo(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.API + "/ativo");
  }

}
