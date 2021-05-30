import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../usuarios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  title: string = 'SENA';

  roles: string[];

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {}

  logout(): void {
    let username = this.authService.usuario.nombre;
    this.authService.logout();
    Swal.fire(
      'Logout',
      `Hola ${username}, has cerrado sesion con exito`,
      'success'
    );
    this.router.navigate(['/login']);
  }
}
