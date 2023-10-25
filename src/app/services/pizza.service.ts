import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../models/pizza';
import { Resposta } from '../models/resposta';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  API: string = 'http://localhost:8080/api/pizza';
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

  listAtivo(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.API + "/ativo");
  }

  save(pizza: Pizza): Observable<Pizza> {
    let valor: number = this.calculaValorPizza(pizza);
    pizza.valorPizza = valor;
    return this.http.post<Pizza>(this.API, pizza);
  }

  edit(id: number, pizza: Pizza): Observable<Pizza>{
    let params = new HttpParams()
      .set('id', id)

      return this.http.put<Pizza>(this.API, pizza, { params: params});
  }

  delete(id: number): Observable<Resposta>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.delete<Resposta>(this.API, {params: params});
  }



  calculaValorPizza(pizza: Pizza): number{
    let total: number = 0;
    total += pizza.tipo.valor;

    for(let item of pizza.sabor)
    {
      total += item.valor;
    }

    return total;
  }
}
