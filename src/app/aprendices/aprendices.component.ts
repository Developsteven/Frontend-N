import { Component, OnInit } from '@angular/core';
import { Aprendiz } from './aprendiz';
import { AprendizService } from './aprendiz.service';

@Component({
  selector: 'app-aprendices',
  templateUrl: './aprendices.component.html',
  styleUrls: ['./aprendices.component.css']
})
export class AprendicesComponent implements OnInit {

  aprendices: Aprendiz[];

  constructor(private aprendizService: AprendizService) { }

  ngOnInit(){
    this.aprendizService.getAprendices().subscribe(
      aprendices => this.aprendices = aprendices
    );
  }

}
