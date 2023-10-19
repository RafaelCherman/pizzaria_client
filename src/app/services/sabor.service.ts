import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Sabor } from '../models/sabor';

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

  save(sabor: Sabor): Observable<string> {
    return this.http.post<string>(this.API, sabor);
  }

  edit(id: number, sabor: Sabor): Observable<string>{
    let params = new HttpParams()
      .set('id', id)

      return this.http.put<string>(this.API, sabor, { params: params});
  }

  delete(id: number): Observable<any>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.delete<any>(this.API, {params: params});
  }

}
