import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aprendiz } from '../aprendices/aprendiz';
import { Novedad } from './novedad';
import { NovedadService } from './novedad.service';
import { Observacion } from './observacion';

@Component({
  selector: 'app-detalle-novedad',
  templateUrl: './detalle-novedad.component.html',
  styleUrls: ['./detalle-novedad.component.css']
})
export class DetalleNovedadComponent implements OnInit {

novedad: Novedad;
observaciones: Observacion;
titulo: string = 'Detalle de la Novedad';

  constructor(private novedadService: NovedadService, 
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      let id = +params.get('id');
      this.novedadService.getNovedad(id).subscribe(novedad => this.novedad = novedad);
      this.novedadService.getObservacion(id).subscribe(observacion => this.observaciones = observacion);
    })
  }

}
