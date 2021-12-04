import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Aprendiz } from './aprendiz';
import { AprendizService } from './aprendiz.service';
import { ModalService } from './detalle/modal.service';

@Component({
  selector: 'app-aprendices',
  templateUrl: './aprendices.component.html',
  styleUrls: ['./aprendices.component.css'],
})
export class AprendicesComponent implements OnInit {
  @Input() aprendices: Aprendiz[];
  paginador: any;
  aprendizSeleccionado: Aprendiz;
  buscarAprendiz: Aprendiz;
  roles: string[];
  aprendiz: Aprendiz;
  documento: string;

  constructor(
    private aprendizService: AprendizService,
    private activatedRoute: ActivatedRoute,
    private modalService: ModalService
  ) {
    this.aprendiz = new Aprendiz();
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.aprendizService
        .getAprendices(page)
        .pipe(
          tap((response) => {
            (response.content as Aprendiz[]).forEach((aprendiz) => {
              //console.log(aprendiz.nombre);
            });
          })
        )
        .subscribe((response) => {
          this.aprendices = response.content as Aprendiz[];
          this.paginador = response;
        });
    });
  }

  receivedata(event: string): void{
    console.log('father', event);
    this.aprendizService.getDocumento$(event)
    .subscribe( res => {
      console.log('...', res);
    })
  }

  abrirModal(aprendiz: Aprendiz) {
    this.aprendizSeleccionado = aprendiz;
    this.modalService.abrirModal();
  }
}
