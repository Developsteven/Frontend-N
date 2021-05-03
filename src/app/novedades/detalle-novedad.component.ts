import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Novedad } from './novedad';
import { NovedadService } from './novedad.service';

@Component({
  selector: 'app-detalle-novedad',
  templateUrl: './detalle-novedad.component.html',
  styleUrls: ['./detalle-novedad.component.css']
})
export class DetalleNovedadComponent implements OnInit {

novedad: Novedad;
titulo: string = 'Novedad';

  constructor(private novedadService: NovedadService, 
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      let id = +params.get('id');
      this.novedadService.getNovedad(id).subscribe(novedad => this.novedad = novedad);
    })
  }

}
