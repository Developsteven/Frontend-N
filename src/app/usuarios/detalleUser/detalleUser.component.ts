import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { ModalUserService } from './modalUser.service';

@Component({
  selector: 'detalle-user',
  templateUrl: './detalleUser.component.html',
  styleUrls: ['./detalleUser.component.css']
})
export class DetalleUserComponent implements OnInit {
  
  @Input() usuario: Usuario; 
  titulo: string = 'Detalle del Usuario';

  constructor(public modalUserService: ModalUserService) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.modalUserService.cerrarModal();
  }
}
