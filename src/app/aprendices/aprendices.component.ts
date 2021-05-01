import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Aprendiz } from './aprendiz';
import { AprendizService } from './aprendiz.service';

@Component({
  selector: 'app-aprendices',
  templateUrl: './aprendices.component.html',
  styleUrls: ['./aprendices.component.css'],
})
export class AprendicesComponent implements OnInit {
  aprendices: Aprendiz[];

  constructor(private aprendizService: AprendizService) {}

  ngOnInit() {
    let page = 0;
    this.aprendizService.getAprendices(page).pipe(tap(response => {
      (response.content as Aprendiz[]).forEach(aprendiz => {
        console.log(aprendiz.nombre);
      });
    })
    ).subscribe(response => this.aprendices = response.content as Aprendiz[]);
  }
}
