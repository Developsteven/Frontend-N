import { Component, Input, OnInit } from '@angular/core';
import { Rol } from '../rol';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ModalUserService } from './modalUser.service';

@Component({
  selector: 'detalle-user',
  templateUrl: './detalleUser.component.html',
  styleUrls: ['./detalleUser.component.css']
})
export class DetalleUserComponent implements OnInit {
  
  @Input() usuario: Usuario; 
  titulo: string = 'Detalle del Usuario';
  roles: Rol[];

  constructor(public modalUserService: ModalUserService,
    public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getRol().subscribe(rol => this.roles = rol);
  }

  cerrarModal(){
    this.modalUserService.cerrarModal();
  }
}
