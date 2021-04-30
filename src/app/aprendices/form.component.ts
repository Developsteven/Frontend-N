import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Aprendiz } from './aprendiz';
import { AprendizService } from './aprendiz.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public aprendiz: Aprendiz = new Aprendiz();
  public titulo: string = 'Crear Cliente';
  public errores: string[];

  constructor(
    private aprendizService: AprendizService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.caragrAprendiz();
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
        this.router.navigate(['novedades']);
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
        this.router.navigate(['novedades']);
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
}
