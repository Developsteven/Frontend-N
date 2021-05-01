import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalUserService {

  modalUser: boolean = false;

  constructor() { }

  abrirModal(){
    this.modalUser = true;
  }

  cerrarModal(){
    this.modalUser = false;
  }
}
