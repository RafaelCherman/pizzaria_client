import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: Usuario = new Usuario();
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

  }
}
