import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = 'http://localhost:8080/api/login';
  http = inject(HttpClient);

  constructor() { }


  logar(login: Usuario): Observable<User> {
    return this.http.post<User>(this.API, login);
  }

  deslogar(): Observable<any> {
    return this.http.get<any>(this.API+'/deslogar');
  }

  hasPermission(token: string): boolean{
    let decodedToken: any = jwtDecode(token);
    console.log(decodedToken);
    if(decodedToken.role == 'ADMIN')
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  getClientID(token: string): number{
    let decodedToken: any = jwtDecode(token);
    console.log(decodedToken);
    if(decodedToken.cliente_id)
    {
      return decodedToken.cliente_id;
    }
    return -1;
  }



  addToken(token: string){
    localStorage.setItem('token', token);
  }

  removerToken(){
    localStorage.removeItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
