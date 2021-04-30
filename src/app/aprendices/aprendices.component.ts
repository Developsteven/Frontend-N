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
    this.aprendizService
      .getAprendices()
      .pipe(tap((aprendices) => (this.aprendices = aprendices)))
      .subscribe();
  }
}
