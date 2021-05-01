import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'paginadorr-nav',
  templateUrl: './paginadorr.component.html',
  styleUrls: ['./paginadorr.component.css']
})
export class PaginadorrComponent implements OnInit {

  @Input() paginar: any;

  paginas: number[];
  desde: number;
  hasta: number;

  constructor() { }

  ngOnInit(): void {
    this.initPaginador();
  }

  ngOnChanges(changes: SimpleChanges){
    let paginadorActualizado = changes['paginador'];
    if(paginadorActualizado.previousValue){
      this.initPaginador();
    }
  }

  private initPaginador(): void{
    this.desde = Math.min(Math.max(1, this.paginar.number - 4), this.paginar.totalPages - 5);
    this.hasta = Math.max(Math.min(this.paginar.totalPages, this.paginar.number + 4), 6);

    if(this.paginar.totalPages > 5){
      this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map((_valor, indice) => indice + this.desde);
    }else{
      this.paginas = new Array(this.paginar.totalPages).fill(0).map((_valor, indice) => indice + 1);
    }
  }
}
