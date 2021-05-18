import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { Aprendiz } from './aprendiz';
import { AprendizService } from './aprendiz.service';
import { ModalService } from './detalle/modal.service';

@Component({
  selector: 'app-aprendices',
  templateUrl: './aprendices.component.html',
  styleUrls: ['./aprendices.component.css'],
})
export class AprendicesComponent implements OnInit {
  aprendices: Aprendiz[];
  paginador: any;
  aprendizSeleccionado: Aprendiz;
  buscarAprendiz: Aprendiz;
  roles: string[];
  isAdmin = false;

  constructor(private aprendizService: AprendizService,
    private activatedRoute: ActivatedRoute,
    private modalService: ModalService,
    private tokenService: TokenService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params =>{
      let page: number = +params.get('page');

      if(!page){
        page =0;
      }

    this.aprendizService.getAprendices(page).pipe(tap(response => {
      (response.content as Aprendiz[]).forEach(aprendiz => {
        console.log(aprendiz.nombre);
      });
    })
    ).subscribe(response => {this.aprendices = response.content as Aprendiz[];
      this.paginador = response;
    });
  });

  this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  abrirModal(aprendiz: Aprendiz){
    this.aprendizSeleccionado = aprendiz;
    this.modalService.abrirModal();
  }

  getDocumento(documento){
    this.aprendizService.getDocumento(documento);
  }
}
