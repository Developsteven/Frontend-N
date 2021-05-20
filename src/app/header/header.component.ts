import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenService } from '../token/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  title: string = 'SENA';

  isLogged = false;
  roles: string[];
  isAdmin = false;

  constructor(private tokenService: TokenService,
    private router: Router) {}

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  onLogOut(): void {
    this.tokenService.logOut();
    
    Swal.fire('Logout', `has cerrado sesion con exito`, 'success');
    this.router.navigate(['/login']);
    location.href;
  }
}
