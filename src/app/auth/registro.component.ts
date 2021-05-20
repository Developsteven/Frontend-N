import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NuevoUsuario } from '../dto/nuevo-usuario';
import { AuthService } from '../token/auth.service';
import { TokenService } from '../token/token.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  isRegister = true;
  isRegisterFail = false;
  nombreUsuario: string;
  nombre: string;
  email: string;
  password: string;
  errMsj: string;
  isLogged = false;
  nuevoUsuario: NuevoUsuario;

  constructor(private tokenService: TokenService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.isRegister = true;
        this.isRegisterFail = false;
        this.router.navigate(['/login']);
        Swal.fire('Creado', `Usuario ${data.nombre} creado con exito!`, 'success');
        
      },
      err => {
        this.isRegister = false;
        this.isRegisterFail = false;
        this.errMsj = err.error.mensaje;
        //this.router.navigate(['/registro']);
        //Swal.fire('Error', `Usuario no se pudo crear!`, 'error');
        // console.log(err.error.message);
      }
    );
  }

}
