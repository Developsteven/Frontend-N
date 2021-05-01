import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    let page = 0;
    this.usuarioService
      .getUsuarios(page)
      .pipe(tap(response =>{
        (response.content as Usuario[]).forEach(usuario => {
          console.log(usuario.nombre);
        });
      })
      ).subscribe(response => this.usuarios = response.content as Usuario[]);
  }
}
