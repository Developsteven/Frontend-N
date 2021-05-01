import { Component, Input, OnInit } from '@angular/core';
import { Aprendiz } from '../aprendiz';
import { AprendizService } from '../aprendiz.service';
import { ModalService } from './modal.service';

@Component({
  selector: 'detalle-aprendiz',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() aprendiz: Aprendiz;
  titulo: string = 'Detalle del Aprendiz';

  constructor(private aprendizService: AprendizService,
    public modalService: ModalService) { }

  ngOnInit(): void {
  }
  cerrarModal(){
    this.modalService.cerrarModal();
  }
}
