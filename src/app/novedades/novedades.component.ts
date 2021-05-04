import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AprendizService } from '../aprendices/aprendiz.service';
import { Novedad } from './novedad';
import { NovedadService } from './novedad.service';
import { TipoNovedad } from './tipo-novedad';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  title: string = 'Crear Novedad';

  tipoNovedades: TipoNovedad[];
  novedad: Novedad = new Novedad();

  constructor(private aprendizService: AprendizService,
    private activateRoute: ActivatedRoute,
    private novedadService: NovedadService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      let aprendizId = +params.get('aprendizId');
      this.aprendizService.getAprendiz(aprendizId).subscribe(aprendiz => this.novedad.aprendiz = aprendiz);
    })
    this.novedadService.getTipoNovedad().subscribe(tipoNovedades => this.tipoNovedades = tipoNovedades);
  }

  compararTipoNovedad(o1:TipoNovedad, o2:TipoNovedad): boolean {
    if(o1 === undefined && o2 === undefined){
      return true;
    }
    return o1 === null || o2 ===null || o1 === undefined || o2 ===undefined? false: o1.id===o2.id;
  }
}
