import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ModalUserService } from './detalleUser/modalUser.service';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[];
  paginar: any;
  usuarioSelecionado: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private modalUserService: ModalUserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.usuarioService
        .getUsuarios(page)
        .pipe(
          tap((response) => {
            (response.content as Usuario[]).forEach((usuario) => {
              //console.log(usuario.nombre);
            });
          })
        )
        .subscribe((response) => {
          this.usuarios = response.content as Usuario[];
          this.paginar = response;
        });
    });
  }

  abrirModal(usuario: Usuario){
    this.usuarioSelecionado = usuario;
    this.modalUserService.abrirModal();
  }
}
