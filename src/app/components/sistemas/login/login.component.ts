import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  /*usuario: Usuario = new Usuario();
  roteador = inject(Router);


  logar() {

    if (this.usuario.login == 'user' && this.usuario.senha == 'user'){
      this.roteador.navigate(['user/menu']);
    }
    else if (this.usuario.login == 'admin' && this.usuario.senha == 'admin') {
      this.roteador.navigate(['admin']);
    }
    else
      alert('Login ou senha incorretos!');
  }

  limpar(){
    this.usuario.login = '';
    this.usuario.senha = '';

  }*/

  login: Usuario = new Usuario();
  roteador = inject(Router);
  loginService = inject(LoginService);

  constructor() {
    this.loginService.removerToken();
  }

  logar() {


    this.loginService.logar(this.login).subscribe({
      next: user => { // QUANDO DÁ CERTO
        console.log(user);
        this.loginService.addToken(user.token);
        if(this.loginService.hasPermission(user.token))
        {
          this.roteador.navigate(['admin']);
        }
        else{
        this.roteador.navigate(['user/menu']);
      }
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  limpar(){
    this.login.login = '';
    this.login.senha = '';

  }
}
