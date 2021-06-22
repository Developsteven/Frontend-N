import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  title: string = "DOCUMENTOS";
  info: string = "Aca encontraras el formato relacionado  que se utiliza para las siquientes novedades"
  
  constructor() { }

  ngOnInit(): void {
  }

}
