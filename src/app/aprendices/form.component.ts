import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Aprendiz } from './aprendiz';
import { AprendizService } from './aprendiz.service';
import { Ficha } from './ficha';
import { TipoDocumento } from './tipoDocumento';
import { Trimestre } from './trimestre';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public aprendiz: Aprendiz = new Aprendiz();
  public titulo: string = 'Crear Aprendiz';
  public errores: string[];
  tipoDocumentos: TipoDocumento[];
  fichas: Ficha[];
  trimestres: Trimestre[];

  constructor(
    private aprendizService: AprendizService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(){
    this.caragrAprendiz()
    this.aprendizService.getTipoDocumento().subscribe(tipoDocumentos => this.tipoDocumentos = tipoDocumentos);
    this.aprendizService.getFichas().subscribe(fichas=> this.fichas = fichas);
    this.aprendizService.getTrimestre().subscribe(trimestres => this.trimestres = trimestres);
  }

  caragrAprendiz(): void {
    this.activateRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.aprendizService
          .getAprendiz(id)
          .subscribe((aprendiz) => (this.aprendiz = aprendiz));
      }
    });
  }

  public create(): void {
    this.aprendizService.create(this.aprendiz).subscribe(
      (aprendiz) => {
        this.router.navigate(['aprendices']);
        Swal.fire(
          'Nuevo aprendiz',
          `Aprendiz ${aprendiz.nombre} creado con exito!`,
          'success'
        );
      },
      (err) => {
        this.errores = err.error.errors as string[];
        console.error('El codigo del error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    );
  }

  update(): void {
    this.aprendizService.update(this.aprendiz).subscribe(
      (aprendiz) => {
        this.router.navigate(['aprendices']);
        Swal.fire(
          'Aprendiz Actualizado',
          `Aprendiz ${aprendiz.nombre} actuarlizado con exito!`,
          'success'
        );
      },
      (err) => {
        this.errores = err.error.errors as string[];
        console.error('El codigo del error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    );
  }

  compararTipoDocumento(o1:TipoDocumento, o2:TipoDocumento): boolean {
    if(o1 === undefined && o2 === undefined){
      return true;
    }
    return o1 === null || o2 ===null || o1 === undefined || o2 ===undefined? false: o1.id===o2.id;
  }

  compararFicha(o1:Ficha, o2:Ficha): boolean {
    if(o1 === undefined && o2 === undefined){
      return true;
    }
    return o1 === null || o2 ===null || o1 === undefined || o2 ===undefined? false: o1.id===o2.id;
  }


  compararTrimestre(o1:Trimestre, o2:Trimestre): boolean {
    if(o1 === undefined && o2 === undefined){
      return true;
    }
    return o1 === null || o2 ===null || o1 === undefined || o2 ===undefined? false: o1.id===o2.id;
  }
}
