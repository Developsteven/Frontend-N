import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
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


  constructor(private aprendizService: AprendizService,
    private activatedRoute: ActivatedRoute,
    private modalService: ModalService,) {}

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

  
  }

  abrirModal(aprendiz: Aprendiz){
    this.aprendizSeleccionado = aprendiz;
    this.modalService.abrirModal();
  }

  getDocumento(documento){
    this.aprendizService.getDocumento(documento);
  }
}
