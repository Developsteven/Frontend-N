import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo:string = 'Por favor Sing In!';
  usuario: Usuario;

  constructor(private authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      Swal.fire('Login', `Hola ${this.authService.usuario.nombre} ya estas autenticado`, 'info');
      this.router.navigate(['/aprendices']);
    }
  }


  login(): void{
    console.log(this.usuario);
    if(this.usuario.mail == null || this.usuario.password == null){
      Swal.fire('Error Login', 'Email o password vacias!', 'error')
      return;
    }

    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);


      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;

      this.router.navigate(['/aprendices']);
      Swal.fire('Login', `Hola ${usuario.nombre}, has iniciado sesion con exito!`, 'success');
    }, err => {
      if (err.status == 400){
        Swal.fire('Error login', 'Email o clave incorrectas!', 'error');
      }
    }
    );
  }
}
